import { useRoute } from '@react-navigation/native';
import { Text, VStack } from "native-base";
import { Header } from "../components/Header";





export function OrderDetails(){
  const route = useRoute()
  const { orderId } = route.params
  return (
  <VStack flex={1}  bgColor={"#121214"}>
      <Header title="Solicitação" />

      <Text color="gray.100" fontSize={"16px"} marginTop={4}>
        {orderId}
      </Text>
  </VStack>
  )
}