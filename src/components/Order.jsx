import React from 'react';
import { HStack, Text, Box, VStack, Icon } from 'native-base';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import IconEnd from "../public/IconEnd.svg";
import IconAndamento from "../public/IconAndamento.svg";


export function Order({data}) {
    const colorStatus = data.status === 'open' ? '#D08E44' : '#04D361';
    const IconsUse = data.status === 'open' ? <IconAndamento/> : <IconEnd/>;

  return (
    <HStack
    backgroundColor={"#202024"}
    alignItems={"center"}
    marginBottom={"16px"}
    rounded = "sm"
    overflow={"hidden"}
    >
    <Box h="full" w={2} bg={colorStatus}/>

    <VStack flex={1} my={5} ml={5}>

    <Text color={"#E1E1E6"}>
        Patrimônio {data.product}
    </Text>

    <HStack alignItems={"center"} >
    <IonicIcons name="time-outline" size={16} color= "#C4C4CC"/>
    <Text color={"#C4C4CC"} marginLeft={1}>
       {data.when}
    </Text>
    </HStack>
    </VStack>

    <HStack marginRight={"5 px"}>
        {IconsUse}
    </HStack>

    </HStack>
  );
}