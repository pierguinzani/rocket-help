import { NativeBaseProvider, Text } from 'native-base'  

import { SignIn } from './src/screens/SignIn';
import { useFonts,Roboto_400Regular  } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular})
  return (
    
    <NativeBaseProvider>
      {fontsLoaded ? <SignIn/> : <Text> Loading</Text>}
    </NativeBaseProvider>
  );
}

