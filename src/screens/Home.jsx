import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Heading, IconButton, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import LogoHeader from '../assets/LogoHeader.svg';
import NoCallsChat from '../assets/NoCallsChat.svg';
import SignOutIcon from '../assets/SignOutIcon.svg';
import { Button } from '../components/Button';
import { Orders } from '../components/Orders';
import { StatusCard } from '../components/StatusCard';


export const orders = [
  {
    id: "1",
    patrimony: "123456",
    when: '28/06/2023 ás 10:00',
    status: 'open'
  },
  {
    id: "2",
    patrimony: "123456",
    when: '28/06/2023 ás 10:00',
    status: 'closed'
  },
  {
    id: "3",
    patrimony: "123456",
    when: '28/06/2023 ás 10:00',
    status: 'open'
  },
  {
    id: "4",
    patrimony: "123456",
    when: '28/06/2023 ás 10:00',
    status: 'closed'
  },
]

export function Home() {
  const [statusSelected, setStatusSelected] = useState('open');
  const [orders, setOrders] = useState([
    {
      id: "1",
      patrimony: "15353613616313",
      when: '28/06/2023 ás 10:00',
      status: 'open'
    },
    {
      id: "2",
      patrimony: "124124151",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "3",
      patrimony: "42142142124",
      when: '28/06/2023 ás 10:00',
      status: 'open'
    },
    {
      id: "4",
      patrimony: "23525262",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "5",
      patrimony: "46468488",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "6",
      patrimony: "23642624626",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "7",
      patrimony: "235235253",
      when: '28/06/2023 ás 10:00',
      status: 'open'
    },
    {
      id: "8",
      patrimony: "231231321",
      when: '28/06/2023 ás 10:00',
      status: 'open'
    },
    {
      id: "9",
      patrimony: "123456",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "10",
      patrimony: "123456",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
    {
      id: "11",
      patrimony: "123456",
      when: '28/06/2023 ás 10:00',
      status: 'closed'
    },
  
  ])

  const filteredOrders = orders.filter(
    order => order.status === (statusSelected === 'open' ? 'open' : 'closed')
  )

const navigation = useNavigation();


  function handleNewOrder() {
    
    navigation.navigate('NewOrder')
  }
  
  function handleLogout() {
    navigation.navigate('SignIn')
  }
  
  function handleOpenOrderDetails(){
    navigation.navigate('OrderDetails')
  }
  return (
    <View bgColor={"#121214"} height={"100%"}>
      <HStack
      w="full"
      height={"136px"}
      justifyContent="space-between"
      alignItems="center"
      bg="#202024"
      pb={6}
      pt={12}
    >
      <LogoHeader marginLeft={24} />
      <IconButton
        icon={<SignOutIcon color={"#7C7C8A"} width={26} height={26} marginRight={12.73}/>}
        onPress={handleLogout}
      />
    </HStack>
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
  data={filteredOrders}
  keyExtractor={item => item.id}
  renderItem={({ item }) => <Orders data={item} onPress={() => handleOpenOrderDetails()}/>}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 100 }}
  ListEmptyComponent={()=> (
    <VStack space={4} flex={1} w="full">
      <NoCallsChat size={40} alignSelf={"center"} />
      <Text color="#7C7C8A" fontSize={"20px"} alignSelf={"center"} textAlign={"center"}>
        Você ainda não tem {'\n'} chamados em aberto
      </Text>
    </VStack>
  )}
/>

      <Button 
      marginTop={"auto"}
      marginBottom={"35px"}
      title="Nova solicitação"
      onPress={handleNewOrder}  
      />
      </VStack>
    </View>
  )
}