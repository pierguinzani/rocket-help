import { NativeBaseProvider, Text } from 'native-base'  
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts,Roboto_400Regular  } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { NewOrder } from './src/screens/NewOrder';
import { DetailsOrder } from './src/screens/DetailsOrder';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular})
  return (
    <NavigationContainer>
    <NativeBaseProvider>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >

      {fontsLoaded ? <Stack.Screen name='SignIn' component={SignIn}/> : <Text> Loading</Text>}
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='NewOrder' component={NewOrder}/>
      <Stack.Screen name='DetailsOrder' component={DetailsOrder}/>
      
      </Stack.Navigator>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

