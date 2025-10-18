import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React, { useState } from 'react';

export default function BotonesScreen() {
  const [esEncendido, cambiarEncendido] = useState(false);
  const [color,cambiarColor] = useState('yellow');
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Control de luz</Text>

        <Text style={[styles.luz, {color: esEncendido ? color : 'black'}]}>
          {esEncendido ? 'Luz Endendida' : 'Luz Apagada'}
        </Text>

        <Switch
          value={esEncendido}
          onValueChange = {()=> cambiarEncendido(!esEncendido)}
          trackColor={{true: 'yellow', false: 'gray'}}
        ></Switch>
        
        <View style={styles.cajaBotones}>
          <Button
          title='Amarillo'
          onPress={()=> esEncendido && cambiarColor ('yellow')}
          color='#f7e958ff'
          ></Button>

          <Button
          title='Azul'
          onPress={()=> esEncendido && cambiarColor ('blue')}
           color='#0f1ec2ff'
          ></Button>

          <Button
          title='Rojo'
          onPress={()=>esEncendido && cambiarColor ('red')}
           color='#c91313ff'
          ></Button>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //
    backgroundColor: '#efb6edff',//fondo
    alignItems: 'center',//alineacion horizontal eje x(start,center,end)
    justifyContent: 'center',//alineacion vertical eje y(start,center,end)
  },
  cajaBotones:{
    marginTop:15,//separacion margen superior
    flexDirection:"row",//direccion de los elementos(row,column)
    gap:10,//separacion entre los elementos
  },
  titulo:{
    fontSize:40,
    color: 'white',
    marginBottom:20,
    fontWeight:'bold',
  },
  luz:{
    fontSize:30,
    marginBottom:15,
  },
})