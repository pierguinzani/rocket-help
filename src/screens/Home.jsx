import { HStack, Heading, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import NoCallsChat from '../../src/assets/NoCallsChat.svg';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { StatusCard } from '../components/StatusCard';




export function Home ({ navigation }) {
  const [statusSelected, setStatusSelected] = useState('open');
  const orders = 3
  
  function handleLogout() {
    navigation.navigate('SignIn')
  }
  
  
  return (
    <View bgColor={"#121214"} height={"100%"}>
      <Header 
        onPress={handleLogout}
      />
      <VStack flex={1} px={6} >
      <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100" fontSize={"20px"}>
            Solicitações
          </Heading>

          <Text color="#C4C4CC">
            {orders}
          </Text>
        </HStack>
      <HStack space={3} mb={8}>
        <StatusCard 
          title="EM ANDAMENTO"
          isActive={statusSelected === 'open'}
          onPress={() => setStatusSelected('open')}
          type="open"
          />
        <StatusCard 
          title="FINALIZADOS"
          isActive={statusSelected === 'closed'}
          onPress={() => setStatusSelected('closed')}
          type="closed"
          />
      </HStack>

      <VStack space={4} flex={1} w="full">
        <NoCallsChat size={40} alignSelf={"center"} />
        <Text color="#7C7C8A" fontSize={"20px"} alignSelf={"center"} textAlign={"center"}>Você ainda não tem                  chamados criados</Text>
      </VStack>
    
      <Button 
      marginTop={"auto"}
      marginBottom={"35px"}
      title="Nova solicitação"
      onPress={() => alert("Criando nova solicitação...")}  
      />
      </VStack>
        </View>
  )
}