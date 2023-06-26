import { HStack, IconButton } from 'native-base';
import LogoHeader from '../assets/LogoHeader.svg';
import SignOutIcon from '../assets/SignOutIcon.svg';




export function Header({ title, ...rest }) {


  return (
    <HStack
      w="full"
      height={"136px"}
      justifyContent="space-between"
      alignItems="center"
      bg="#202024"
      pb={6}
      pt={12}
    >
      <LogoHeader marginLeft={24} />
      <IconButton
        icon={<SignOutIcon color={"#7C7C8A"} width={26} height={26} marginRight={12.73} />}
        {...rest}
      />
    </HStack>
  );
}








    // <Center width={"428px"} height={"136px"} marginBottom={"400px"} bgColor={"#202024"} flexDirection={"row"} justifyContent={"space-around"} >
    //   <LogoHeader marginTop={86}/>
    //   <SignOutIcon />
    // </Center>
  

