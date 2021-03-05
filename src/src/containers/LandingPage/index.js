import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, Alert, TextInput, ImageBackground, Dimensions } from 'react-native'
import { Images } from "../../common";
import styles from "./styles"
// import { Validations } from "../../helpers"

export default function LandingPage(props) {

  useEffect(() => {
  }, [])

  const { navigation } = props;

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red' }}>
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            style={styles.imageStyle}
            resizeMode='stretch'
            source={Images.LandingImg}>
          </ImageBackground>
          <View style={styles.Imgbackground}>
            <Image source={Images.mbanklogo} style={styles.image} />
          </View>
        </View>
        <View style={{ height: 5 }} />
        
      </View>
      
    </View>
  )
}
