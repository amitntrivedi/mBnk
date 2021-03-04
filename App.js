/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

 

import {   SafeAreaView,  StyleSheet,  } from "react-native";
 
import Navigation from "@Navigation";

const App = () => {
   
  return (
    <>
 
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default App;