import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TaskList({ data }) {
  const navigation = useNavigation();

  function handleTaskPress() {
    navigation.navigate('InfosTask', { taskData: data });
  }

  const isEmAndamento = data.status === 'emAndamento';

  return (
    <View
      style={[
        styles.container,
        isEmAndamento ? styles.containerAndamento : styles.containerFinalizado,
      ]}
    >
      <TouchableOpacity style={styles.boxTxtImg} onPress={handleTaskPress}>
        <Text style={styles.task}>{data.task}</Text>
        <View style={styles.hr}>
          <Image
            source={require('../../../assets/relogio.png')}
            style={styles.aplt}
          />
          <Text style={styles.data}>20/01/22 às 14h</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {isEmAndamento ? (
          <Image
            source={require('../../../assets/ampulheta.png')}
            style={styles.aplt}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../../../assets/verificadogreen.png')}
            style={styles.vrf}
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
  containerAndamento: {
    borderColor: '#FBA94C',
  },
  containerFinalizado: {
    borderColor: '#04D361',
  },
  task: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    backgroundColor: '#29292E',
    padding: 15,
    borderRadius: 100,
  },
  hr: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  data: {
    color: '#C4C4CC',
    marginLeft: 10,
    fontSize: 12,
  },
  vrf: {},
});