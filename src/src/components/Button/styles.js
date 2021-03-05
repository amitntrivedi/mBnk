import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
const { height: h, width: w } = Dimensions.get("window");
import { Colors,fonts,Images } from '../../common';
const styles = StyleSheet.create({
    button: {
        width:'100%',
        height:45,
        borderRadius: 5,
       borderWidth:1,
       borderColor:'white',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:"#E20000"
    },
    buttonText: {
        fontSize: 16,
      
       fontFamily: fonts.Bold,
        color: '#ffffff',
        textAlign: 'center'
    },
})

export default styles;