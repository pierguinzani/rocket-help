import React from 'react';
import { VStack, HStack, Text, Heading, Box } from 'native-base';

export function OutPut({...props}) {

  return (
    <HStack
    backgroundColor={"#202024"}
    alignItems={"center"}
    my={"20px"}
    mx={"20px"}
    rounded = "xl"
    overflow={"hidden"}
    >

    <VStack flex={1} marginTop={5} mx={5}>
    <Heading 
      color="#7C7C8A"
      fontSize={"sm"}
      mb={2}
    >
      {props.title}
    </Heading>

    <Text 
      color={"#E1E1E6"}
      fontSize={"md"}
    >
      {props.description} 
    </Text>

    <Box
    py={0.5}
    >
    <Text 
      color="#7C7C8A"
      >
        {props.when}
    </Text>
      </Box>

    </VStack>
    </HStack>
  );
}