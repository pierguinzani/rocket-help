import { Input as NativeBaseInput} from 'native-base';


export function Input({...rest}){
    return(
    <NativeBaseInput
    backgroundColor={"#121214"}
    color={"#7C7C8A"}
    size={4}
    marginTop={4}
    width={"90%"}
    borderWidth={0}
    borderRadius={6}
    _focus={{
        bg: '#121214',
        borderWidth: 1,
        borderColor: '#00B37E'
      }}
    {...rest}
    />
    )
}