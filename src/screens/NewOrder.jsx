import { VStack } from 'native-base'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'



export function NewOrder({ navigation }) {
  function handleNavigation() {
    navigation.navigate('Home')
  }
  return (
    <VStack flex={1} padding={6} bgColor={"#202024"}>
      <Header
        title="Solicitação"
        marginTop={4}
      />

      <Input 
        placeholder="Número do Patrimônio"
        fontSize={"16px"}
/>

      <Input 
        placeholder="Descrição do problema"
        flex={1}
        multiline={true}
        textAlignVertical="top"
        marginTop={5}
        fontSize={"16px"}
      />  
      <Button title="Cadastrar" onPress={handleNavigation} marginTop={5} />
    </VStack>
  )
}