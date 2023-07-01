import { useNavigation } from '@react-navigation/native';
import { HStack, Heading, IconButton } from 'native-base';
import GetBack from '../assets/GetBack.svg';



 export function Header({ title, ...rest }) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      width={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#202024"}
      pb={6}
      pt={12}
      
    >
      <IconButton
        icon={<GetBack color={"#7C7C8A"} width={24} height={24} marginTop={10}/>}
        onPress={handleGoBack}
        {...rest}
      />
    <Heading color={"#E1E1E6"} fontSize={"20px"} fontWeight={"bold"} textAlign={"center"} mr={"140px"}  mt={"16px"}>
      {title}
    </Heading>
    </HStack>  
  );
}


