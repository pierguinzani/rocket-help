import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/screens/Home';
import { NewOrder } from './src/screens/NewOrder';
import { SignIn } from './src/screens/SignIn';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NewOrder" component={NewOrder} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}