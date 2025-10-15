import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import ImageScreen from './ImageScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import ButtomScreen from './ButtomScreen';
export default function MenuScreen(){

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotonesScreen />;
        case 'textin':
            return <TextInputAlertScreen />;
        case 'image':
            return <ImageScreen />;
        case 'scroll':
            return <ScrollViewScreen />;
        case 'activity':
            return <ActivityIndicatorScreen />;
        case 'flatlist':
            return <FlatListScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'butsheet':
            return <ButtomScreen />;
        case 'menu':
            return (
                <View>
                    <Text>Menu de practicas</Text>
                    <Button onPress={() => setScreen('contador')} title='Pract:Contador' />
                    <Button onPress={() => setScreen('botones')} title='Pract:Buttons' />
                    <Button onPress={() => setScreen('textin')} title='Pract:Text input y Alert' />
                    <Button onPress={() => setScreen('image')} title='Pract:ImageBackground y SlapshScreen' />
                    <Button onPress={() => setScreen('scroll')} title='Pract:ScrollView' />
                    <Button onPress={() => setScreen('activity')} title='Pract:ActivityIndicator' />
                    <Button onPress={() => setScreen('flatlist')} title='Pract:FlatList y Section List' />
                    <Button onPress={() => setScreen('modal')} title='Pract:Modal' />
                    <Button onPress={() => setScreen('butsheet')} title='Pract:Buttom Sheet' />
                    
                </View>
            );
        default:
            return null;
    }
    
}

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
    