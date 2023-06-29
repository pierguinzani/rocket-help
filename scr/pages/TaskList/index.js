import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TaskList({ data }) {
  const navigation = useNavigation();

  function handleTaskPress() {
    if (data.status === 'emAndamento') {
      navigation.navigate('InfosTask', { taskData: data });
    } else if (data.status === 'finalizada') {
      navigation.navigate('FinalizadosFinal', { taskData: data });
    }
  }
  

  const isTaskInProgress = data.status === 'emAndamento';

  return (
    <View
      style={[
        styles.container,
        isTaskInProgress ? styles.containerInProgress : styles.containerFinished,
      ]}
    >
      <TouchableOpacity style={styles.textImageBox} onPress={handleTaskPress}>
        <Text style={styles.taskName}>{data.task}</Text>
        <View style={styles.hr}>
          <Image
            source={require('../../../assets/relogio.png')}
            style={styles.clockIcon}
          />
          <Text style={styles.timestamp}>{data.timestamp}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {isTaskInProgress ? (
          <Image
            source={require('../../../assets/ampulheta.png')}
            style={styles.hourglassIcon}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../../../assets/verificadogreen.png')}
            style={styles.checkmarkIcon}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 12,
    elevation: 1.5,
    backgroundColor: '#202024',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    borderLeftWidth: 6,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  containerInProgress: {
    borderColor: '#FBA94C',
  },
  containerFinished: {
    borderColor: '#04D361',
  },
  taskName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: '#29292E',
    padding: 15,
    borderRadius: 100,
  },
  hr: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center'
  },
  timestamp: {
    color: '#C4C4CC',
    marginLeft: 10,
    fontSize: 12,
  },
  clockIcon: {
    width: 16,
    height: 16,
  },
  hourglassIcon: {
    width: 24,
    height: 24,
  },
  checkmarkIcon: {
    width: 24,
    height: 24,
  },
  textImageBox: {
    flex: 1,
  },
});