import { Box, Circle, HStack, Pressable, Text, VStack, useTheme } from 'native-base';
import Clock from '../assets/Clock.svg';
import HourGlass from '../assets/HourGlass.svg';
import WavyCheck from '../assets/WavyCheck.svg';




export function Orders({ data, ...rest }){
  const { colors } = useTheme()
  const statusColor = data.status === 'open' ? colors.secondary[700] : "#04D361";
  return (
  <Pressable>
    <HStack
      bg={"#202024"}
      mb={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      rounded={"sm"}
      overflow={"hidden"}
    >

      <Box h={"full"} width={2} bg={statusColor}/>
      <VStack flex={1} my={5} ml={5} >
            <Text color={"#E1E1E6"} fontSize={"md"}>
                Patrimônio {data.patrimony}
            </Text>
        <HStack alignItems={"center"} >
          <Clock/>
          <Text color="#C4C4CC" fontSize="xs" ml={1}>
            {data.when}
          </Text>
        </HStack> 
      </VStack>
      <Circle bg={"#29292E"} h={12} w={12}  marginRight={5}>
      {
      data.status === 'closed' 
      ? <WavyCheck  size={24} color={statusColor} />
      : <HourGlass size={24} color={statusColor}/>
        }
      </Circle>
      
    </HStack>
    </Pressable>
  )
}