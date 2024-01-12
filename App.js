import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import PrimaryDrawer from "./navigators/PrimaryDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <PrimaryDrawer />
    </NavigationContainer>
  );
}

