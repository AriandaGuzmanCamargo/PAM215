import { Text, StyleSheet, View, ImageBackground,Animated, Easing } from 'react-native'
import Recat, { useState, useEffect, use} from 'react'

export default function ImageScreen() {
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
      <Animated.View style={[styles.splashContainer,{opacity: desvanecido} ]}>
        <ImageBackground
          source = {require('../assets/harry.jpg')}
          resizeMode='contain'
          style={styles.splashImage}
          
        >
          <Text style={styles.splashText}>cargando..</Text>
        </ImageBackground>
      </Animated.View>
    );
  }
    return (
      <ImageBackground
       source = {require('../assets/descarga.jpg')}
       resizeMode='cover'
       style={styles.background}
      >
        <view style={styles.textoContainer}>
          <Text style={styles.texto}>Bienvenida a mi app!</Text>
        </view>
        
       
      </ImageBackground>
      /*<View>
        <Text>Proximamente por Charly</Text>
      </View>*/
    )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',
  },
  texto:{
    color: 'black',
    fontSize:24,
    fontWeight: 'bold',
  },
  splashContainer:{
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:50,
  },
  splashImage:{
    flex: 1,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  splashText:{
    position:'absolute',
    fontSize:20,
    color:'#333',
  },
  textoContainer:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
  },
})