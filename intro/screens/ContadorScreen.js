//1. imports:Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function App() {

  const[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>💕Contador💕</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="purple" title='Incrementar 'onPress={()=>setContador(contador+1)}> </Button>
      <Button color="purple" title='Quitar 'onPress={()=>setContador(contador-1)}> </Button>
      <Button color="purple" title='Reiniciar 'onPress={()=>setContador(0)}> </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
//3. Styles: Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1, //
    backgroundColor: '#e0b3f5ff',//fondo
    alignItems: 'center',//alineacion horizontal eje x(start,center,end)
    justifyContent: 'center',//alineacion vertical eje y(start,center,end)
  },
  texto:{
    fontFamily:"Times New Roman",//fuente
    fontSize:30,//tamaño de la fuente
    color:"#20076cff",//color de la fuente
    fontWeight:"bold",//grosor de la fuente(normal,bold)
    fontStyle:"italic",//estilo de la fuente(normal,italic)
    textDecorationLine:"line-through",//decoracion de la fuente(none,underline,line-through)
  },
  texto2:{
    fontFamily:"Courier",//fuente
    fontSize:40,//tamaño de la fuente
    color:"#7b1503ff",//color de la fuente
    fontWeight:"500",//grosor de la fuente(normal,bold)
    fontStyle:"italic",//estilo de la fuente(normal,italic)
    textDecorationLine:"underline",//decoracion de la fuente(none,underline,line-through)
  },
  contenedorBotones:{
    marginTop:20,//separacion margen superior
    flexDirection:"column",//direccion de los elementos(row,column)
    gap:30,//separacion entre los elementos
  },
});
    