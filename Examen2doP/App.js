import { StyleSheet, Text, View, Button, ImageBackground,Animated,Easing,ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [cargando,setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);

  
  useEffect(()=>{
    const timer = setTimeout(() => {
      Animated.timing(desvanecido,{
        toValue:0,
        duration:800,
        useNativeDriver:true,

      }).start(()=> setCargando(false));

    },2000);
    return () => clearTimeout(timer);

  },[]);

  if(cargando){
    return(
      <ImageBackground
        source={require('./assets/fondo.jpeg')}
        resizeMode='contain'
        style={styles.splashImage}
      >
        <Text style={styles.text}>!Amimo si pasamos!</Text>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/fondo2.jpeg')}
        resizeMode='cover'
        style={styles.background}
      >
        <Text>"Mis deberes"</Text>
        <Text>Viernes 07 de Noviembre del 2025</Text>
        <View>
          <ScrollView 
          >
            <View style={styles.contenedoresP}>
              <Text style={styles.titulos}>Personal</Text>
              <Text style={styles.contenedoresP}>Sepillarse los dientes</Text>
              <Text>Bañarse</Text>
            </View>
            <View style={styles.contenedoresE}>
              <Text style={styles.titulos}>Estudios</Text>
              <Text>Hacer examen de react native</Text>
              <Text>Estudiar para el examen de matematicas</Text>
            </View>
            <View style={styles.contenedoresH}>
              <Text style={styles.titulos}>Hogar</Text>
              <Text>Lavar los trastes</Text>
              <Text>Barrer la casa</Text>
            </View>
              
          </ScrollView>
        </View>
        


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    paddingTop:50,
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
  },
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  contenedoresP:{
    flex:1,
    padding:20,
    marginTop:50,
    backgroundColor:'rgba(247, 194, 194, 0.8)',
    borderRadius:10,

  },
  contenedoresE:{
    flex:1,
    padding:20,
    marginTop:50,
    backgroundColor:'rgba(219, 247, 194, 0.8)',
    borderRadius:10,
  },
  contenedoresH:{
    flex:1,
    padding:20,
    marginTop:50,
    backgroundColor:'rgba(194, 227, 247, 0.8)',
    borderRadius:10,
  },
  titulos:{
    fontSize:30,

  },
});
