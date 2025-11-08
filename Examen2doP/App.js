import { StyleSheet, Text, View, Button, ImageBackground,Animated,Easing,ScrollView,Switch } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [cargando,setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);
  const [esEncendido, cambiarEncendido] = useState(false);
  const [esEncendidoT1, cambiarEncendidoT1] = useState(false);
  const [esEncendidoT2, cambiarEncendidoT2] = useState(false);
  const [esEncendidoT3, cambiarEncendidoT3] = useState(false);
  const [esEncendidoT4, cambiarEncendidoT4] = useState(false);
  const [esEncendidoT5, cambiarEncendidoT5] = useState(false);
  const [esEncendidoT6, cambiarEncendidoT6] = useState(false);
  const reiniciarSwitches = () => {
  cambiarEncendidoT1(false);
  cambiarEncendidoT2(false);
  cambiarEncendidoT3(false);
  cambiarEncendidoT4(false);
  cambiarEncendidoT5(false);
  cambiarEncendidoT6(false);
};

  
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
    <ScrollView>
    <View style={styles.container}>
      
      <ImageBackground
        source={require('./assets/fondo2.jpeg')}
        resizeMode='cover'
        style={styles.background}
      >
        <Text style={styles.tituloP}>"Mis deberes"</Text>
        <Text>Viernes 07 de Noviembre del 2025</Text>
        <View>
          
            <View style={styles.contenedoresP}>
              <Text style={styles.titulos}>Personal</Text>
              <View style={styles.tareasC}>
                <Text >Sepillarse los dientes</Text>
                <Text>Descripccion: Cada dia sepillar los dientes en las mananas</Text>
                <Text>Prioridad: ALta</Text>
                <Switch
                  value={esEncendidoT1}
                  onValueChange = {()=> cambiarEncendidoT1(!esEncendidoT1)}
                  trackColor={{true: 'yellow', false: 'gray'}}
                > </Switch>
              </View>
              <View style={styles.tareasC}>
                <Text >Bañarse</Text>
                <Text>Descripccion: 2 veces al dia banarse</Text>
                <Text>Prioridad:ALta</Text>
                <Switch
                  value={esEncendidoT2}
                  onValueChange = {()=> cambiarEncendidoT2(!esEncendidoT2)}
                  trackColor={{true: 'yellow', false: 'gray'}}
                ></Switch>
              </View>
              
            </View>
            <View style={styles.contenedoresE}>
              <Text style={styles.titulos}>Estudios</Text>
                <View style={styles.tareasC}>
                  <Text>Hacer examen de react native</Text>
                <Text>Descripccion: Estuaidar y practicar para el examen</Text>
                <Text>Prioridad: Alta</Text>
                <Switch
                  value={esEncendidoT3}
                  onValueChange = {()=> cambiarEncendidoT3(!esEncendidoT3)}
                  trackColor={{true: 'yellow', false: 'gray'}}
                ></Switch>
              </View>
              <View style={styles.tareasC}>
                <Text>Estudiar para el examen de matematicas</Text>
              <Text>Descripccion: Practicar ejercicios</Text>
              <Text>Prioridad: ALta</Text>
              <Switch
                value={esEncendidoT4}
                onValueChange = {()=> cambiarEncendidoT4(!esEncendidoT4)}
                trackColor={{true: 'yellow', false: 'gray'}}
              ></Switch>
              </View>
              
            </View>
            <View style={styles.contenedoresH}>
              <Text style={styles.titulos}>Hogar</Text>
              <View style={styles.tareasC}>
                <Text>Lavar los trastes</Text>
              <Text>Descripccion: Limpiar y lavar bien los trastes sucios</Text>
              <Text>Prioridad: Media</Text>
              <Switch
                value={esEncendidoT5}
                onValueChange = {()=> cambiarEncendidoT5(!esEncendidoT5)}
                trackColor={{true: 'yellow', false: 'gray'}}
              ></Switch>
              </View>
              
              <View style={styles.tareasC}>
                <Text>Barrer la casa</Text>
              <Text>Descripccion: Barrer el patio y recojer basura</Text>
              <Text>Prioridad: Baja</Text>
              <Switch
                value={esEncendidoT6}
                onValueChange = {()=> cambiarEncendidoT6(!esEncendidoT6)}
                trackColor={{true: 'yellow', false: 'gray'}}
              ></Switch>
              </View>
              
            </View>
            <Button
              title='Reiniciar'
              onPress={()=> reiniciarSwitches }
            />
              
        
        </View>
        


      </ImageBackground>
      
    </View>
    </ScrollView>
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
    padding:20,
    height:'50%',
    marginTop:50,
    backgroundColor:'rgba(247, 194, 194, 0.8)',
    borderRadius:10,

  },
  tareasC:{
    padding:20,
    height:'30%',
    marginTop:50,
    backgroundColor:'rgba(147, 147, 145, 0.8)',
    borderRadius:10,
  },
  contenedoresE:{
    padding:20,
    height:'50%',
    marginTop:50,
    backgroundColor:'rgba(219, 247, 194, 0.8)',
    borderRadius:10,
  },
  contenedoresH:{
    height:'50%',
    padding:20,
    marginTop:50,
    backgroundColor:'rgba(194, 227, 247, 0.8)',
    borderRadius:10,
  },
  titulos:{
    fontSize:30,

  },
  tareas:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(194, 227, 247, 0.8)',
    flex:1,
    marginBottom:20,
  },
  tituloP:{
    fontSize:40,
    color:'red',
  },
});
