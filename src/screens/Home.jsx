import { Text, VStack, HStack, Heading,FlatList, IconButton, Center} from "native-base";
import {useState} from 'react'
import IonicIcons from 'react-native-vector-icons/Ionicons';

import { Button } from "../components/Button";
import { Filter } from '../components/Filter'
import { Order } from '../components/Order'

import Logo from "../public/Logo2.svg";
import SymbolEmpty from "../public/SymbolEmpty.svg";


export function Home({navigation}){
    function handleSignOff(){
        navigation.navigate('SignIn');
    }
    const [statusSelected,setStatus] = useState('open');
    const [orders] = useState([
        {
            id: '1',
            product: '147456',
            when: '20/01/22 às 14h',
            status: 'open',
        },
        {
            id: '2',
            product: '147456',
            when: '20/01/22 às 14h',
            status: 'closed',
        },
        {
            id: '3',
            product: '147456',
            when: '20/01/22 às 14h',
            status: 'open',
        },
        {
            id: '4',
            product: '147456',
            when: '20/01/22 às 14h',
            status: 'closed',
        },
        {
            id: '5',
            product: '147456',
            when: '20/01/22 às 14h',
            status: 'closed',
        },
    ]);
    
    const filteredOrders = orders.filter(
        order => order.status === (statusSelected === 'open' ? 'open' : 'closed')
      )

    return (
        <VStack flex={1} pb={6} bg="#121214">
            <HStack
                w="full"
                justifyContent={"space-between"}
                alignItems={"center"}
                bg="#202024"
                pt={12}
                pb={6}
                px={6}
            >

            <Logo/>
            
            <IconButton icon={<IonicIcons name="log-in-outline" size={26} color="#FFF" />} onPress={handleSignOff}/>
            </HStack>

            <VStack flex={1} px={8}>
                <HStack w="full" mt={8} mb={4} justifyContent={"space-between"} alignItems={"center"}>
                    <Heading 
                    color="#E1E1E6"
                    fontWeight={"bold"}
                    fontSize={"xl"}
                    >
                        Solicitações
                    </Heading>

                    <Text 
                    color="#C4C4CC"
                    size={4}
                    >
                        {filteredOrders.length}
                    </Text>
                </HStack>

                <HStack space={3} mb ={8}>
                        <Filter
                        type={"open"}
                        title={"EM ANDAMENTO"}
                        onPress={() =>setStatus('open')}
                        isActive={statusSelected === 'open'}
                        />
                        <Filter
                        type={"closed"}
                        title={"FINALIZADOS"}
                        onPress={() =>setStatus('closed')}
                        isActive={statusSelected === 'closed'}
                        />
                </HStack>
                <FlatList
                    data={filteredOrders}
                    keyExtractor={item => item.id}
                    renderItem = { ({item}) => <Order data={item} /> }
                    ListEmptyComponent={() => (
                        <Center>
                            <SymbolEmpty/>
                            <Text color="#7C7C8A" fontSize={"xl"} alignItems={"center"}>
                                Você ainda não tem {'\n'}
                                chamados criados 
                            </Text>
                        </Center>
                    )}
                />

                <Button 
                    title={"Nova solicitação"} 
                    onPress={() => navigation.navigate('NewOrder')}
                />
            </VStack>

        </VStack>
    )
}