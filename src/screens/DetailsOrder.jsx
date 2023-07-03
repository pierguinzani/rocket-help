import {React, useEffect} from 'react';
import { VStack, HStack, IconButton, Box, Text, TextArea, ScrollView  } from 'native-base';
import IonicIcons from 'react-native-vector-icons/Ionicons';


import { Button } from "../components/Button";
import { OutPut} from "../components/OutPut";

import IconEnd from "../public/IconEnd.svg";
import IconAndamento from "../public/IconAndamento.svg";
import { useNavigation } from '@react-navigation/native';

export function DetailsOrder() {
  const navigation = useNavigation();
  
  function handleHome(){
    navigation.navigate('Home');
  }
  function handleEnd(){
    alert("Solicitação Finalizada!")
    navigation.navigate('Home');
  }
  
  let order = {
    id: 1,
    product: 123456,
    description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    when: '20/01/22 às 14h',
    status: 'open',
  }
  
  const colorStatus = order.status === 'open' ? '#D08E44' : '#04D361';
  const IconsUse = order.status === 'open' ? <IconAndamento/> : <IconEnd/>;
  const TextStatus = order.status === 'open' ? 'EM ANDAMENTO' : 'FINALIZADO';
  
  return (
    <VStack
    flex={1}  
    bgColor={"#121214"}
    >
      <HStack
        justifyContent={"center"}
        alignItems={"center"}                
        pt={12}
        pb={4}
        px={4}
      >
        
      <IconButton icon={<IonicIcons name="chevron-back-outline" size={26} color="#7C7C8A" />} onPress={handleHome}/>

      <Box flex={1} alignItems={"center"}>
          <Text
            color={"#E1E1E6"}
            fontWeight={"bold"}
            fontSize={"xl"}
          >
            Solicitação
          </Text>
      </Box>
      </HStack>
    <ScrollView >
      <HStack alignItems={"center"} justifyContent={'center'} bg={"#29292E"}>
        {IconsUse}
        <Text color={colorStatus} ml={'0.5'}>
        {TextStatus}
        </Text>
      </HStack>
      <OutPut 
      title={"EQUIPAMENTO "}
      description={"Patrimonio "+ order.product}
      />
      <OutPut
      title={"DESCRIÇÃO DO PROBLEMA "}
      description={order.description}
      when={"Registrado em "+ order.when}
      />

      <Box
      alignItems={"center"}
      >
      </Box>

      <Box
      flex={1} mx={5} backgroundColor={"#202024"}
      >
      <TextArea aria-label="t1" numberOfLines={4} placeholder="Descrição da solução"   isDisabled={TextStatus === 'FINALIZADO'}/>
      </Box>

      <Box
      alignItems={"center"}
      >
      <Button
        width={"90%"}
        title={"Finalizar"}
        marginBottom={"35px"}
        marginTop={"41px"}
        onPress={handleEnd}
      />
      </Box>
      </ScrollView >
    </VStack>
)};