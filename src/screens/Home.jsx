import { FlatList, HStack, Heading, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import NoCallsChat from '../assets/NoCallsChat.svg';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Orders } from '../components/Orders';
import { StatusCard } from '../components/StatusCard';




export function Home ({ navigation }) {
  const [statusSelected, setStatusSelected] = useState('open');
  const [orders, setOrders] = useState([{
    id: "1",
    patrimony: "123456",
    when: '28/06/2023 ás 10:00',
    status: 'open'
  },
  {
    id: "2",
    patrimony: "235135",
    when: '28/06/2023 ás 11:00',
    status: 'closed'
  }



])
  
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
            {orders.length}
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

      <FlatList 
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Orders data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={()=> (
          <VStack space={4} flex={1} w="full">
          <NoCallsChat size={40} alignSelf={"center"} />
          <Text color="#7C7C8A" fontSize={"20px"} alignSelf={"center"} textAlign={"center"}>Você ainda não tem {'\n'} chamados {statusSelected === "open" ? "em aberto" : "finalizados"} </Text>
        </VStack>
        )}
      />
      <Button 
      marginTop={"auto"}
      marginBottom={"35px"}
      title="Nova solicitação"
      onPress={() => console.log('teste')}  
      />
      
      </VStack>
    </View>
  )
}