import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
const { height: h, width: w } = Dimensions.get("window");
import { Colors,fonts,Images } from '../../common';
const styles = StyleSheet.create({
   mainView:{
   backgroundColor: 'transparent',borderWidth:0.1,borderColor: '#000000',
          margin:10,flex:1
        
   },
   subView:{
    flex:1,justifyContent:"space-evenly",alignItems:"center",backgroundColor: 'white',  shadowOffset: {
              width: 1,
              height: 4
            },
            shadowColor: 'black',
            borderColor:"#00000055",
            borderWidth:1,
            shadowOpacity:0.5,elevation: 0,borderRadius: 5, shadowRadius: 5
  },
  imagestyles:{
    width:30,height:30
  },
  subtext:{
    textAlign: 'center',fontSize: 12
  }
})

export default styles;