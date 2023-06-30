import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { FinishedTasksContext } from "../FinishedTasksContext/FinishedTasksContext";
import { MaterialIcons } from "@expo/vector-icons";
import moment from 'moment';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
  },
  boxAll: {
    backgroundColor: "#202024",
    paddingHorizontal: 30,
    paddingBottom: "5%",
  },
  boxTxtImg: {
    flexDirection: "row",
    marginTop: "10%",
  },
  seta: {
    color: "#FFF",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "25%",
  },
  boxAndamento: {
    backgroundColor: "#29292E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  aplt: {
    width: 24,
    height: 24,
  },
  txt: {
    color: "#FBA94C",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "2%",
  },
  cxtd: {
    paddingHorizontal: 30,
  },
  Box: {
    backgroundColor: "#202024",
    padding: 15,
    marginTop: "6%",
    borderRadius: 5,
  },
  imgTXT: {
    display: "flex",
    flexDirection: "row",
  },
  EqpTXT: {
    color: "#7C7C8A",
    marginLeft: "3%",
  },
  task: {
    color: "#E1E1E6",
    marginTop: "2%",
  },
  textHorario: {
    color: "#7C7C8A",
    fontSize: 12,
    marginTop: "2%",
  },
  textarea: {
    color: "#FFF",
    height: 210,
    textAlignVertical: "top",
    marginTop: "12%",
    marginLeft: "-30%",
  },
  boxButton: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    marginTop: 20,
  },
  enter: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 5,
    backgroundColor: "#00875F",
    marginBottom: "5%",
  },
  txtbutton: {
    color: "#fff",
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "#29292E",
    borderBottomWidth: 1,
    marginTop: 15,
  },
});

export default function InfosTask() {
  const { tasks, setTasks } = useContext(FinishedTasksContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { taskData } = route.params;
  const [additionalInfo, setAdditionalInfo] = useState("");
  const { timestamp } = taskData;

  function handleFinishTask() {
    const updatedTasks = tasks.map((task) => {
      if (task.key === taskData.key) {
        return {
          ...task,
          additionalInfo: additionalInfo,
          status: "finalizada",
          timestamp: moment().format("DD/MM/YY [às] HH[:]mm"),
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
    navigation.goBack();
  }
  

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxAll}>
        <View style={styles.boxTxtImg}>
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialIcons style={styles.seta} name="chevron-left" size={33} />
          </TouchableOpacity>
          <Text style={styles.title}>Solicitação</Text>
        </View>
      </View>
      <View style={styles.boxAndamento}>
        <Image
          source={require("../../../assets/ampulheta.png")}
          style={styles.aplt}
        />
        <Text style={styles.txt}>EM ANDAMENTO</Text>
      </View>
      <ScrollView>
        <View style={styles.cxtd}>
          <View style={styles.Box}>
            <View style={styles.imgTXT}>
              <Image source={require("../../../assets/equipamentos.png")} />
              <Text style={styles.EqpTXT}>EQUIPAMENTO</Text>
            </View>
            <Text style={styles.task}>{taskData.task}</Text>
          </View>

          <View style={styles.Box}>
            <View style={styles.imgTXT}>
              <Image source={require("../../../assets/lista.png")} />
              <Text style={styles.EqpTXT}>DESCRIÇÃO DO PROBLEMA</Text>
            </View>
            <Text style={styles.task}>{taskData.description}</Text>
            <View style={styles.line} />
            <Text style={styles.textHorario}>Registrado em {timestamp}</Text>
          </View>
          <View style={styles.Box}>
            <View style={styles.imgTXT}>
              <View style={styles.imgTXT}>
                <Image source={require("../../../assets/verificado.png")} />
                <Text style={styles.EqpTXT}>SOLUÇÃO</Text>
              </View>
              <TextInput
                style={styles.textarea}
                placeholder="Descrição da solução"
                placeholderTextColor="#7C7C8A"
                onChangeText={(text) => setAdditionalInfo(text)}
                value={additionalInfo}
                multiline={true}
              />
            </View>
          </View>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity onPress={handleFinishTask} style={styles.enter}>
            <Text style={styles.txtbutton}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
