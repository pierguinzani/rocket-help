import { VStack, HStack, Text, IconButton, Box } from 'native-base';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import notifee, { AndroidImportance} from '@notifee/react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';


export function NewOrder() {
    const navigation = useNavigation();
    function handleHome(){
        navigation.navigate('Home');
    }

      
  const [patrimonio, setPatrimonio] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleCadastrar = async () => {
    const channelId = await notifee.createChannel({
      id: 'login',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
      title: 'Ticket criado!',
      body: 'Um novo ticket foi registrado em nosso sistema.',
      android: {
        channelId,
        smallIcon: 'ic_stat_onesignal_default',
        color : '#00B37E',
        pressAction: {
          id: 'default',
        },
      },
    });
    navigation.navigate('Home', {
      patrimonio: patrimonio,
      descricao: descricao,
    });
  }  

    return (
    <VStack
    bg="#202024"
    flex={1}
    alignItems={"center"}
    >
            <HStack
                justifyContent={"center"}
                alignItems={"center"}                
                pt={12}
                pb={4}
                px={4}
            >
            
            <IconButton icon={<IonicIcons name="chevron-back-outline" size={26} color="#7C7C8A" />} onPress={handleHome}/>

            <Box flex={1} alignItems={"center"}>
            <Text
            color={"#E1E1E6"}
            fontWeight={"bold"}
            fontSize={"xl"}
            >
                Solicitação
            </Text>
            </Box>
            </HStack>

            <Input
            placeholder="Número do Patrimônio"
            value={patrimonio}
            onChangeText={setPatrimonio}
            keyboardType={"numeric"}
            />

            <Input
            placeholder="Descrição do problema"
            flex={1}
            multiline
            textAlignVertical={"top"}
            value={descricao}
            onChangeText={setDescricao}
            />

            <Button
            width={"90%"}
            title={"Cadastrar"}
            marginBottom={"35px"}
            marginTop={"24px"}
            onPress={handleCadastrar}
            />

    </VStack>
  );
}