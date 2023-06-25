import React, { useState, useContext } from 'react';
import {
  Box,
  NativeBaseProvider,
  Image,
  Text,
  View,
  ScrollView,
} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FinishedTasksContext } from '../FinishedTasksContext/FinishedTasksContext';
import TaskList from '../TaskList/taskList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
  },
  boxAll: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 25,
  },
  boxAImg: {
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#202024',
    marginTop: '10%',
    marginBottom: '10%',
  },
  request: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
  },
  title: {
    fontSize: 20,
    color: '#E1E1E6',
  },
  number1: {
    color: '#E1E1E6',
    fontSize: 16,
  },
  boxButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
    marginTop: '8%',
  },
  boxButton1: {
    width: '50%',
    height: 40,
    backgroundColor: '#202024',

    borderRadius: 5,
  },
  buttontxt1: {
    color: '#7C7C8A',
    textAlign: 'center',
    fontSize: 12,
    marginTop: '3%',
  },
  boxButton2: {
    borderRadius: 5,
    width: '50%',
    height: 40,
    backgroundColor: '#202024',
  },
  buttontxt2: {
    color: '#7C7C8A',
    textAlign: 'center',
    fontSize: 12,
    marginTop: '4%',
  },
  msgTxt: {
    alignSelf: 'center',
    marginTop: '15%',
  },
  msg: {
    alignSelf: 'center',
  },
  Txt: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: '10%',
    color: '#7C7C8A',
    maxWidth: '60%',
  },
  boxBotton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  enter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 5,
    backgroundColor: '#00875F',
    marginBottom: '5%',
  },
  txtbotton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  //estilo do MODAL
  modal: {
    flex: 1,
    backgroundColor: '#202024',
  },
  boxTxtImg: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: '10%',
  },
  seta: {
    color: '#FFF',
  },
  modalTxt: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '-8%',
  },
  number: {
    paddingHorizontal: 30,
  },
  input: {
    color: '#FFF',
    marginTop: '20%',
    backgroundColor: '#121214',
    width: '100%',
    height: '24%',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  cxMsg: {
    paddingHorizontal: 30,
  },
  textarea: {
    color: '#FFF',
    backgroundColor: '#121214',
    height: 500,
    paddingHorizontal: 15,
    borderRadius: 5,
    textAlignVertical: 'top',
    marginTop: '-27%',
    paddingTop: '5%',
    paddingBottom: '8%',
  },
  enter1: {
    marginTop: '7%',
    backgroundColor: '#00875F',
    height: 56,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
    margin: '5%',
  },
  txtbotton1: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  boxP: {
    flex: 3,
    marginTop: '5%',
  },
  finishedTask: {
    backgroundColor: '#04D361',
  },
  activeTask1: {
    borderWidth: 1,
    borderColor: '#FBA94C',
    
  },
  activeTask: {
    borderColor: '#04D361',
    borderWidth: 1,
  },
  activeTasktext1: {
    color: '#FBA94C',
  },
  activeTasktext2: {
    color: '#04D361',
  }
});

export default function Home() {
  const { tasks, setTasks } = useContext(FinishedTasksContext);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [activeFilter, setActiveFilter] = useState('emAndamento');

  function handleTaskPress(taskData) {
    navigation.navigate('InfosTask', { taskData });
  }

  function filterTasks() {
    if (activeFilter === 'finalizadas') {
      return tasks.filter((task) => task.status === 'finalizada');
    } else {
      return tasks.filter((task) => task.status === 'emAndamento');
    }
  }

  function handleAdd() {
    if (input === '' || input2 === '') return;

    const data = {
      key: String(tasks.length + 1),
      task: input,
      description: input2,
      status: 'emAndamento',
    };

    setTasks([...tasks, data]);
    setOpen(false);
    setInput('');
    setInput2('');
  }
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Box style={styles.boxAImg}>
          <Image
            source={require('../../../assets/LogoMenor.png')}
            style={styles.logo}
            alt="logo-menor"
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/voltardif.png')}
              style={styles.voltardif}
              alt="voltar-dif"
            />
          </TouchableOpacity>
        </Box>

        <Box style={styles.boxAll}>
          <View>
            <Box style={styles.request}>
              <Text style={styles.title}>Solicitações</Text>
              <Text style={styles.number1}>0</Text>
            </Box>

            <Box style={styles.boxButton}>
              <TouchableOpacity
                style={[
                  styles.boxButton1,
                  activeFilter === 'emAndamento' && styles.activeTask1,
                ]}
                onPress={() => setActiveFilter('emAndamento')}
              >
                <Text style={[
                  styles.buttontxt1,
                  activeFilter === 'emAndamento' && styles.activeTasktext1,
                ]}>EM ANDAMENTO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.boxButton2,
                  activeFilter === 'finalizadas' && styles.activeTask,
                ]}
                onPress={() => setActiveFilter('finalizadas')}
               
              >
                <Text style={[
                  styles. buttontxt2,
                  activeFilter === 'finalizadas' && styles.activeTasktext2,
                ]}>FINALIZADOS</Text>
              </TouchableOpacity>
            </Box>
          </View>

          <Box style={styles.boxP}>
            <ScrollView>
              <FlatList
                data={filterTasks()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleTaskPress(item)}>
                    <TaskList data={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key}
              />
            </ScrollView>
          </Box>
          {/* <Box style={styles.boxP}>
            <ScrollView>
              <FlatList
                marginHorizontal={10}
                data={filterTasks()}
                backgroundColor="#fff"
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleTaskPress(item)}>
                    <Text>{item.task}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key}
              />
            </ScrollView>
          </Box> */}

          <Box style={styles.boxBotton}>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.enter}
            >
              <Text style={styles.txtbotton}>Nova solicitação</Text>
            </TouchableOpacity>
          </Box>

          <Modal transparent={false} visible={open}>
            <View style={styles.modal}>
              <Box style={styles.boxTxtImg}>
                <TouchableOpacity>
                  <MaterialIcons
                    style={styles.seta}
                    name="chevron-left"
                    size={33}
                  />
                </TouchableOpacity>
                <Text style={styles.modalTxt}>Solicitação</Text>
              </Box>
              <View>
                <Box style={styles.number}>
                  <TextInput
                    placeholder="Número do Patrimônio"
                    keyboardType="numeric"
                    style={styles.input}
                    multiline
                    placeholderTextColor="#7C7C8A"
                    value={input}
                    onChangeText={setInput}
                  />
                </Box>
                <Box style={styles.cxMsg}>
                  <TextInput
                    placeholder="Descrição do problema"
                    style={styles.textarea}
                    multiline
                    placeholderTextColor="#7C7C8A"
                    value={input2}
                    onChangeText={setInput2}
                  />
                </Box>

                <TouchableOpacity style={styles.enter1} onPress={handleAdd}>
                  <Text style={styles.txtbotton1}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}