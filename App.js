import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';




export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (

    <NativeBaseProvider>
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>

  );
}