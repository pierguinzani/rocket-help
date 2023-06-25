import { Button as NativeBaseButton } from 'native-base';


export function Button({...props}){
  return (
    <NativeBaseButton
      bgColor={'#00875F'}
      width={"364px"}
      height={"56px"}
      color={"#FFFFFF"}
      fontSize={"16px"}
      fontWeight={"bold"}
      marginTop={"32px"}
      _pressed={
        {
          bg: '#00B37E',
        }
        } 
      {...props}
    >
      Entrar
    </NativeBaseButton>
  )
}