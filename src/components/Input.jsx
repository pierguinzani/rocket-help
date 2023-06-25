import { Input as NativeBaseInput } from 'native-base'





export function Input({...props}) {
  return (
    <NativeBaseInput 
      
      bgColor={'#121214'}
      width={"364px"}
      height={"56px"}
      borderWidth={0}
      _focus={{
        bg: '#121214',
        borderWidth: 1,
        borderColor: '#00B37E'
      }}
    {...props}
    />
  )
}