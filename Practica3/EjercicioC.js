function simulaPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    const datos = await simulaPeticionAPI();
    console.log(datos);
}
obtenerDatos();