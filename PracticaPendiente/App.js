import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Detalle from './screens/Detalle';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={{
          title: "Detalles del usuario",
          headerBackTitle: "Regresar",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Perfil';
  
  if (routeName === 'Detalle') {
    return 'none';
  }
  return 'flex';
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              paddingBottom: 5,
              height: 60,
            },
          })}
        />
        <Tab.Screen name="Settings" component={Settings} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}