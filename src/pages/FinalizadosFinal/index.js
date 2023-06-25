import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FinishedTasksContext } from '../FinishedTasksContext/FinishedTasksContext';

export default function FinalizadosFinal() {
  const { tasks } = useContext(FinishedTasksContext);
  const navigation = useNavigation();
  const route = useRoute();
  const { taskData } = route.params;

  // Encontra a tarefa correspondente com base na key
  const task = tasks.find((task) => task.key === taskData.key);

  return (
    <View>
      <Text>{task.task}</Text>
      <Text>{task.description}</Text>
      <Text>{task.additionalInfo}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
