import { Box, HStack, IconButton, Text, VStack } from "native-base";
import React from "react";




export function OrderCardDetails({title, description, footer, ...rest}) {
  return (
    <VStack flex={1} padding={5} marginTop={5} rounded={"sm"} bgColor={"#202024"}>
      <HStack alignItems={"center"} marginBottom={4}>
        <IconButton  {...rest}  size={22} color={"#04D361"} />
        <Text color={"#7C7C8A"} fontSize={"14px"} ml={2} textTransform={"uppercase"}>
          {title}
        </Text>
      </HStack> 
      
      <Text color={"#E1E1E6"} fontSize={"16px"} >
        {description}
      </Text>
      <Box borderTopWidth={1} borderTopColor={"202024"} marginTop={3}>
      <Text color={"#7C7C8A"} fontSize={"14px"}>{footer}</Text>
      </Box> 
      </VStack> 
  )
}
