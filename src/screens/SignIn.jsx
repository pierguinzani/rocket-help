
import { KeyboardAvoidingView, VStack, Heading, View,Box,Image } from 'native-base';



const img = require('../public/Logo.png');

import { Input } from '../components/Input'

import { Button } from '../components/Button';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import useState  from 'react';


export function SignIn() {

    return (
        <VStack  flex={1} alignItems={"center"} justifyContent={"center"}  backgroundColor={"#202024"}>

            <Box>
            <Image 
                source={img}
                width={163}
                height={87}
                alt="Alternate Text" />
            </Box>

            <Heading marginBottom={10} color={"#E1E1E6"} >
                Acesse sua conta
            </Heading>
            <Input
            placeholder="E-mail"
            InputLeftElement={<IonicIcons name="mail" size={20} color="#7C7C8A" marginLeft={20}/>}
            keyboardType='email-address'
            autoCapitalize='none'
            />

            <Input
            placeholder="Senha"
            InputLeftElement={<IonicIcons name="key" size={20} color="#7C7C8A" marginLeft={20}/>}
            secureTextEntry

            />

            <Button
            />

        </VStack>    
    )
}