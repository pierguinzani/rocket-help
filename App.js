import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import EStyleSheet from 'react-native-extended-stylesheet';
import {  FinishedTasksProvider } from "./src/pages/FinishedTasksContext/FinishedTasksContext";

EStyleSheet.build();

export default function App() {
  return (
    <NavigationContainer>
     <FinishedTasksProvider>
      <StatusBar backgroundColor="#202024" />
      <Routes />
      </FinishedTasksProvider>
    </NavigationContainer>
  );
}
