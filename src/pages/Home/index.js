import React, { useState, useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  ScrollView,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FinishedTasksContext } from "../FinishedTasksContext/FinishedTasksContext";
import TaskList from "../TaskList/taskList";
import moment from "moment";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
  },
  boxAll: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 30,
  },
  boxAImg: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#202024",
    marginTop: "10%",
    marginBottom: "5%",
  },
  request: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  titleNumber: {
    fontSize: 18,
    color: "#E1E1E6",
  },
  boxButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: "5%",
  },
  boxButton1: {
    width: "50%",
    backgroundColor: "#202024",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt1: {
    color: "#7C7C8A",
    fontSize: 12,
    padding: 7,
  },
  boxButton2: {
    width: "50%",
    backgroundColor: "#202024",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt2: {
    color: "#7C7C8A",
    fontSize: 12,
    padding: 7,
  },
  activeTask1: {
    borderWidth: 1,
    borderColor: "#FBA94C",
  },
  activeTask: {
    borderColor: "#04D361",
    borderWidth: 1,
  },
  activeTasktext1: {
    color: "#FBA94C",
  },
  activeTasktext2: {
    color: "#04D361",
  },
  msgTxt: {
    alignSelf: "center",
    marginTop: "15%",
  },
  msg: {
    alignSelf: "center",
  },
  Txt: {
    textAlign: "center",
    fontSize: 16,
    marginTop: "10%",
    color: "#7C7C8A",
    maxWidth: "60%",
  },
  boxBotton: {
    flex: 1,
    justifyContent: "flex-end",
  },
  enter: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 5,
    backgroundColor: "#00875F",
    marginBottom: "5%",
  },
  txtbotton: {
    color: "#fff",
    fontWeight: "bold",
  },
  allModal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    flex: 1,
    backgroundColor: "#202024",
    paddingHorizontal: 30,
  },
  boxTxtImg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7%",
  },
  seta: {
    color: "#FFF",
  },
  modalTxt: {
    color: "#FFF",
    fontSize: 20,
    marginLeft: "25%",
  },
  input: {
    color: "#FFF",
    marginTop: "12%",
    backgroundColor: "#121214",
    width: "100%",
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 50,
  },
  cxMsg: {
    marginTop: 15,
    marginBottom: 20,
  },
  textarea: {
    color: "#FFF",
    backgroundColor: "#121214",
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "100%",
    height: 518,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  boxP: {
    flex: 5,
    marginTop: "5%",
  },
  semchamados: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  semchamadosText: {
    color: "#7C7C8A",
    fontSize: 16,
    paddingHorizontal: 70,
    textAlign: "center",
    marginTop: 20,
  },
});

export default function Home() {
  const { tasks, setTasks } = useContext(FinishedTasksContext);
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [activeFilter, setActiveFilter] = useState("emAndamento");

  const tasksEmAndamento = tasks.filter(
    (task) => task.status === "emAndamento"
  );
  const tasksFinalizadas = tasks.filter((task) => task.status === "finalizada");

  function handleCloseModal() {
    setOpen(false);
  }

  function handleTaskPress(taskData) {
    if (taskData.status === "emAndamento") {
      navigation.navigate("InfosTask", { taskData });
    } else if (taskData.status === "finalizada") {
      navigation.navigate("FinalizadosFinal", { taskData });
    }
  }

  function filterTasks() {
    if (activeFilter === "finalizadas") {
      return tasksFinalizadas;
    } else {
      return tasksEmAndamento;
    }
  }

  function handleAdd() {
    if (input === "" || input2 === "") return;

    const currentTime = moment().format("DD/MM/YY [às] HH[:]mm");
    const data = {
      key: String(tasks.length + 1),
      task: input,
      description: input2,
      status: "emAndamento",
      timestamp: currentTime,
    };

    setTasks([...tasks, data]);
    setOpen(false);
    setInput("");
    setInput2("");
  }

  const filteredTasks = filterTasks();

  return (
    <View style={styles.container}>
      <View style={styles.boxAImg}>
        <Image
          source={require("../../../assets/LogoMenor.png")}
          style={styles.logo}
          alt="logo-menor"
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/voltardif.png")}
            style={styles.voltardif}
            alt="voltar-dif"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.boxAll}>
        <View>
          <View style={styles.request}>
            <Text style={styles.titleNumber}>Solicitações</Text>
            <Text style={styles.titleNumber}>
              {activeFilter === "finalizadas"
                ? tasksFinalizadas.length
                : tasksEmAndamento.length}
            </Text>
          </View>

          <View style={styles.boxButton}>
            <TouchableOpacity
              style={[
                styles.boxButton1,
                activeFilter === "emAndamento" && styles.activeTask1,
              ]}
              onPress={() => setActiveFilter("emAndamento")}
            >
              <Text
                style={[
                  styles.buttontxt1,
                  activeFilter === "emAndamento" && styles.activeTasktext1,
                ]}
              >
                EM ANDAMENTO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.boxButton2,
                activeFilter === "finalizadas" && styles.activeTask,
              ]}
              onPress={() => setActiveFilter("finalizadas")}
            >
              <Text
                style={[
                  styles.buttontxt2,
                  activeFilter === "finalizadas" && styles.activeTasktext2,
                ]}
              >
                FINALIZADOS
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxP}>
          {filteredTasks.length === 0 && (
            <View style={styles.semchamados}>
              <Image source={require("../../../assets/msg.png")} alt="msg" />
              <Text style={styles.semchamadosText}>
                Você ainda não tem chamados criados
              </Text>
            </View>
          )}

          {filteredTasks.length > 0 && (
            <FlatList
              data={filteredTasks}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleTaskPress(item)}>
                  <TaskList data={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key}
            />
          )}
        </View>

        <View style={styles.boxBotton}>
          <TouchableOpacity onPress={() => setOpen(true)} style={styles.enter}>
            <Text style={styles.txtbotton}>Nova solicitação</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={false} visible={open} style={styles.allModal}>
          <View style={styles.modal}>
            <View style={styles.boxTxtImg}>
              <TouchableOpacity onPress={handleCloseModal}>
                <MaterialIcons
                  style={styles.seta}
                  name="chevron-left"
                  size={33}
                />
              </TouchableOpacity>
              <Text style={styles.modalTxt}>Solicitação</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <View style={styles.number}>
                  <TextInput
                    placeholder="Número do Patrimônio"
                    keyboardType="numeric"
                    style={styles.input}
                    multiline
                    placeholderTextColor="#7C7C8A"
                    value={input}
                    onChangeText={setInput}
                  />
                </View>
                <View style={styles.cxMsg}>
                  <TextInput
                    placeholder="Descrição do problema"
                    style={styles.textarea}
                    multiline
                    placeholderTextColor="#7C7C8A"
                    value={input2}
                    onChangeText={setInput2}
                  />
                </View>

                <View style={styles.txtbotton}>
                  <TouchableOpacity style={styles.enter} onPress={handleAdd}>
                    <Text style={styles.txtbotton}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
}
