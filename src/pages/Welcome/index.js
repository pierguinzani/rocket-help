import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  boxAll: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  boxAImg: {
    marginTop: '15%',
  },
  title: {
    color: '#E1E1E6',
    fontSize: 20,
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
    borderRadius: 5,
    height: 46,
    paddingHorizontal: 40,
    color: '#7C7C8A',
  },
  inputImage: {
    position: 'absolute',
    left: 10,
    top: 12.5,
    zIndex: 9999,
  },
  boxBotton: {
    marginTop: '5%',
  },
  enter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
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

  return (
  
      <View style={styles.container}>
        <View style={styles.boxAll}>
          <View style={styles.boxAImg}>
            <Image
              source={require('../../../assets/Logo.png')}
              style={styles.logo}
              alt="logo"
            />
          </View>
          <Text style={styles.title}>Acesse sua conta</Text>

          <View style={styles.boxInput}>
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

            <View style={styles.boxBotton}>
              <TouchableOpacity style={styles.enter} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.txtbotton}> Nova solicitação</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

  );
}

