import { Text, StyleSheet, View, Button, TextInput, Alert,ImageBackground,Animated, Easing, Switch  } from 'react-native'
import Recat, { useState, useEffect, use} from 'react'

export default function Repaso1() {
  const [cargando,setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [esEncendido, cambiarEncendido] = useState(false);

  const mostrarAlerta = () => {
    if(nombre.trim() === '' && email.trim() === '' ){
      Alert.alert("Error favor de llenar todos los campos");
      alert("Favor de llenar todos los campos");
    }else if(nombre.trim() === ''){
      Alert.alert("Error favor de llenar el campo de Nombre");
      alert("Favor de llenar el campo de Nombre");
    } else if(email.trim() === ''){
      Alert.alert("Error favor de llenar el campo de Email");
      alert("Favor de llenar el campo de Email");
    }else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error ingrese un correo electrónico válido");
      alert("Ingrese un correo electrónico válido");
    }
else if (!esEncendido) {
      Alert.alert("Terminos no acepatdos");
      alert("Terminos no acepatdos");
    } 
      else{
      Alert.alert('Registro Exitoso\n'+
              `Nombre: ${nombre}\nEmail: ${email}\n`
              
      );
      alert('Registro Exitoso\n' +
              `Nombre: ${nombre}\nEmail: ${email}\n`
              
      );

    }
  }

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
          source = {require('../assets/fondoCarga.jpg')}
          resizeMode='contain'
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>LOANDING.........</Text>
        </ImageBackground>
      </Animated.View>
    );
  }
    return (
      <ImageBackground
       source = {require('../assets/fondoPrincipal.jpg')}
       resizeMode='cover'
       style={styles.background}
      >
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Registro de Usuario</Text>
          <TextInput
            placeholder='Nombre Completo'
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder='Correo Electrónico'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.terminos}>
            <Text>¿Acepta términos y condiciones?</Text>
            <Switch
              value={esEncendido}
              onValueChange={cambiarEncendido}
            />

          </View>
          <Button
            color='#151716ff'
            title='Registrarse'
            onPress={mostrarAlerta}
          />

        </View>
      </ImageBackground>
    
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
    marginBottom:20,
    textAlign:'center',

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
    width: '80%',

    backgroundColor: 'rgba(81, 78, 78, 0.7)',
    padding: 20,
  },
  input:{
    color:'white',//color del texto
    width:'100%',//ocupa el ancho disponible 
    borderWidth:2,//Grosor del borde
    borderColor:'#ffffffff',//color del borde
    borderRadius:8,//para los bordes redondeados
    padding:10,//espacio interno dentro del input
    marginBottom:10,//espacio esntre cada campo
    backgroundColor:'rgba(143, 140, 140, 0.7)',//color fondo
  },
  terminos:{
    color:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    marginBottom:30,
  },
  boton:{
    marginTop:20,

  },
})