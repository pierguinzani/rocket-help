import { Button as NativeBaseButton, Box} from "native-base";
import { Roboto_400Regular } from '@expo-google-fonts/roboto'

export function Button({...props}){
    return (
            <NativeBaseButton
                justifyContent={"center"}
                bg={'#00875F'}
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
                {...props}
            >
                {props.title}
            </NativeBaseButton>
    )
}