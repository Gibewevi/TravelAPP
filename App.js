import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './components/getStarted/GetStarted';
import HomePage from './components/homePage/HomePage';
import Destination from './components/Destination/Destination';
import APIcontextProvider from './components/context/APIcontext';
import Payment from './components/Payment/Payment';

const App = () => {
  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <APIcontextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='GetStarted'>
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="Destination"
              component={Destination}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </APIcontextProvider>
    </SafeAreaView>
  );
};

export default App;