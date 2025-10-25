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
import Repaso1 from './Repaso1';

export default function MenuScreen() {
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
    case 'repaso1':
      return <Repaso1 />;
    case 'menu':
      return (
        <View style={styles.container}>
          <Text style={styles.title}>💕Menú de Prácticas💕</Text>
          
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('contador')} title="Pract: Contador" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('botones')} title="Pract: Buttons" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('textin')} title="Pract: Text Input y Alert" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('image')} title="Pract: ImageBackground y SplashScreen" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('scroll')} title="Pract: ScrollView" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('activity')} title="Pract: ActivityIndicator" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('flatlist')} title="Pract: FlatList y Section List" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('modal')} title="Pract: Modal" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('butsheet')} title="Pract: Bottom Sheet" />
            </View>
            <View style={styles.button}>
              <Button color="#390245ff" onPress={() => setScreen('repaso1')} title="Repaso1" />
            </View>
          </View>
        </View>
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centra verticalmente
    alignItems: 'center',      // Centra horizontalmente
    backgroundColor: '#e6a3fcff', // Color de fondo suave
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000ff',
  },
  button: {
    marginTop:20,//separacion margen superior
    flexDirection:"column",//direccion de los elementos(row,column)
    gap:30,//separacion entre los elementos
  },
});
