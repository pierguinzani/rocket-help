import { useNavigation } from "@react-navigation/native";
import { HStack, ScrollView, Text, VStack } from "native-base";
import Clipboard from "../assets/Clipboard.svg";
import Computer from "../assets/Computer.svg";
import HourGlass from "../assets/HourGlass.svg";
import WavyCheck from "../assets/WavyCheck.svg";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { OrderCardDetails } from "../components/OrderCardDetails";



export function OrderDetails(){
  const navigation = useNavigation()
  let order = {
    status:"open",
    patrimony: "123456",
    description: "Lorem ipsum dolor sit a",
    footer: "28/06/2023 ás 10:00",
    when: "28/06/2023 ás 10:00"
  }
  function handleFinishOrder(){
    alert("Solicitação Finalizada!")
    navigation.navigate("Home")
  }
  return (
  <VStack flex={1}  bgColor={"#121214"}>
      <Header title="Solicitação" />
    <HStack bg={"#29292E"} justifyContent={"center"} padding={4}>
      {
        order.status === "closed"
        ? <WavyCheck size={22} color={"#04D361"} />
        : <HourGlass size={22} color={"#FBA94C"} />
      }

      <Text color={order.status === 'open' ? "#FBA94C" : "#04D361"} marginLeft={2} >
        {order.status === 'closed' ?'FINALIZADO' : 'EM ANDAMENTO'}
      </Text>
    </HStack>

    <ScrollView mx={5} showsVerticalScrollIndicator={false}>
      <OrderCardDetails title={"Equipamento"} description={"Patrimônio 1203123123"} icon={<Computer  width={20} height={20}/>}/>
      <OrderCardDetails title={"Descrição do problema"} icon={<Clipboard  width={20} height={20}/>} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consequatur quae architecto quidem doloribus? Aperiam repellendus eos unde tempore porro impedit, sunt ea voluptates labore, nam iure! Saepe, veritatis."} footer={"Registrado em 28/06/2023 ás 10:00"}/>
      
      <OrderCardDetails title={"Solução"} description={"Descrição da Solução"} icon={<WavyCheck width={20} height={20}/> }>
      </OrderCardDetails> 

      {
        order.status === "open" &&

        <Button  width={"100%"} mb={10} title="Finalizar" onPress={handleFinishOrder}/>
      }
    </ScrollView>
  </VStack>
  )
}