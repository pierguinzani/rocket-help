import React from 'react';
import {
  Box,
  NativeBaseProvider,
  Image,
  Text,
  View,
} from 'native-base';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  boxAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  boxAImg: {
    marginTop: '-40%',
  },
  img: {
    width: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: '#E1E1E6',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '25%',
  },
  boxInput: {
    width: '100%',
    marginTop: '10%',
    paddingHorizontal: '5%',
  },
  inputContainer: {
    marginBottom: '5%',
  },
  input: {
    backgroundColor: '#121214',
    borderWidth: 0,
    borderRadius: 5,
    height: 56,
    paddingHorizontal: 40,
    color: '#7C7C8A',
  },
  inputImage: {
    position: 'absolute',
    left: 10,
    top: 18,
    zIndex: 9999,
  },
  boxBotton: {
    marginTop: '5%',
  },
  enter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 5,
    backgroundColor: '#00875F',
  },
  txtbotton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default function Welcome() {
  const navigation = useNavigation();

  const entrarHome = () => {
    navigation.reset({
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.boxAll}>
          <Box style={styles.boxAImg}>
            <Image
              source={require('../../../assets/Logo.png')}
              style={styles.logo}
              alt="logo"
            />
          </Box>
          <Text style={styles.title}>Acesse sua conta</Text>

          <Box style={styles.boxInput}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../../assets/email.png')}
                style={styles.inputImage}
                alt="icone-msg"
              />
              <TextInput
                placeholder="E-mail"
                type="email"
                style={styles.input}
                placeholderTextColor="#7C7C8A"
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../../assets/chave.png')}
                style={styles.inputImage}
                alt="icone-senha"
              />
              <TextInput
                placeholder="Senha"
                type="password"
                style={styles.input}
                placeholderTextColor="#7C7C8A"
              />
            </View>

            <Box style={styles.boxBotton}>
              <TouchableOpacity style={styles.enter} onPress={entrarHome}>
                <Text style={styles.txtbotton}> Nova solicitação</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

