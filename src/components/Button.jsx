import { Button as NativeBaseButton, Box} from "native-base";
import { Roboto_400Regular } from '@expo-google-fonts/roboto'

export function Button({...rest}){
    return (
            <NativeBaseButton
                justifyContent={"center"}
                bg={'#00875F'}
                width={"90%"}
                height={"56px"}
                fontSize={"md"}
                fontWeight={"bold"}
                marginTop={8}
                fontFamily={"Roboto_400Regular"}
                _pressed={ 
                    {
                        bg:"#009C7B"
                    }
                }
                {...rest}
            >
                Entrar
            </NativeBaseButton>
    )
}