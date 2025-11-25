import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
        this.storageKey = 'usuarios';
    }

    async initialize() {
        try {
            if (Platform.OS === 'web') {
                console.log('Usando LocalStorage para web');
                // Inicializar clave si no existe
                const existing = localStorage.getItem(this.storageKey);
                if (!existing) {
                    localStorage.setItem(this.storageKey, JSON.stringify([]));
                }
            } else {
                console.log('Usando SQLite para móvil');
                this.db = await SQLite.openDatabaseAsync('miapp.db');
                await this.db.execAsync(`
                    CREATE TABLE IF NOT EXISTS usuarios (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre TEXT NOT NULL,
                        fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                    );
                `);
            }
        } catch (error) {
            console.error('Error inicializando base de datos:', error);
            throw error;
        }
    }

    async getAll() {
        try {
            if (Platform.OS === 'web') {
                const data = localStorage.getItem(this.storageKey);
                return data ? JSON.parse(data) : [];
            } else {
                const rows = await this.db.getAllAsync('SELECT * FROM usuarios ORDER BY id DESC');
                return rows;
            }
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    }

    async add(nombre) {
        try {
            if (Platform.OS === 'web') {
                const usuarios = await this.getAll();
                const nuevoUsuario = {
                    id: Date.now(),
                    nombre,
                    fecha_creacion: new Date().toISOString(),
                };
                usuarios.unshift(nuevoUsuario);
                localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
                return nuevoUsuario;
            } else {
                const result = await this.db.runAsync('INSERT INTO usuarios(nombre) VALUES (?)', [nombre]);
                return {
                    id: result.lastInsertRowId || result.insertId,
                    nombre,
                    fecha_creacion: new Date().toISOString(),
                };
            }
        } catch (error) {
            console.error('Error al agregar usuario:', error);
            throw error;
        }
    }
}

export default new DatabaseService();