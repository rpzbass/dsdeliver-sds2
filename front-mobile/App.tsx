import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import  Routers  from './src/Routers';
import Header from './src/Header';


function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

      <View style={styles.container}>
        <StatusBar style="auto" />
       
        <Routers/>

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
});

export default App;