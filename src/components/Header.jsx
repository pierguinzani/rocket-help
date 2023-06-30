import { HStack, Heading, IconButton } from 'native-base';
import GetBack from '../assets/GetBack.svg';



 export function Header({ navigation, title, ...rest }) {
  function handleLogout() {
    navigation.navigate('SignIn')
  }

  return (
    <HStack
      width={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#202024"}
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        icon={<GetBack color={"#7C7C8A"} width={24} height={24} />}
        onPress={handleLogout}
      />
    <Heading color={"#E1E1E6"} fontSize={"20px"} fontWeight={"bold"} textAlign={"center"} mr={"124px"} >
      {title}
    </Heading>
    </HStack>  
  );
}


