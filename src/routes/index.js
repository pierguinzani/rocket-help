import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
// import TaskList from '../pages/TaskList';
import FinalizadosFinal from '../pages/FinalizadosFinal';
import InfosTask from '../pages/InfosTask/infosTask';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      /> 
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{ headerShown: false }}
      /> */}
    
      <Stack.Screen
        name="FinalizadosFinal"
        component={FinalizadosFinal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfosTask"
        component={InfosTask}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

