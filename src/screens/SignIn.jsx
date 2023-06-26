import { Text, View } from "native-base";
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/Logo.svg';
import { Button } from "../components/Button";
import { Input } from "../components/Input";





export function SignIn({ navigation }) {
  const handleSignIn = () => {
    navigation.navigate('Home'); 
  };
  
  return (
    <View bgColor={"#202024"} flex={1} justifyContent={"center"} alignItems={"center"}>
      <Logo /> 
        <Text marginTop={"80px"} color={"#E1E1E6"} fontWeight={"bold"} fontSize={"16px"} >Acesse sua conta</Text>
      <Input 
        marginTop={"24px"}
        fontSize={"16px"}
        placeholder={"E-mail"}
        keyboardType={"email-address"}
        InputLeftElement={<IonicIcons name="mail-outline" color={"#7C7C8A"} marginLeft={16} size={24} /> }
      />
      <Input 
        InputLeftElement={<IonicIcons name="key-outline" color={"#7C7C8A"} marginLeft={16} size={20.25}/> }
        placeholder={"Senha"}
        fontSize={"16px"}
        secureTextEntry
        marginTop={"16px"} 
        marginBotton={"32px"}
        />
      <Button 
        title={"Entrar"}
        marginBottom={"260px"}
        onPress={handleSignIn}
      />

    </View>
  )
}