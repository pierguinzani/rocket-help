import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
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
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}