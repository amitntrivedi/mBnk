import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");

import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  mainView:{
    flex: 1,backgroundColor: 'white'
  },
  topView:{
    flex:0.4,
    paddingLeft:20,justifyContent:"space-evenly",backgroundColor: '#000000',borderBottomWidth: 1,
    borderColor: 'black',borderBottomRightRadius:25,borderBottomLeftRadius:25,
    
  },
  dateText:{
    color:"white",fontSize: 18
  },
  balancetext:{
    color:"#E20000",fontSize: 20
  },
  amttext:{
    color:"white",fontSize: 25
  },
  middleView:{
    flex:0.1,flexDirection: 'row',justifyContent:"space-evenly",alignItems: 'center',paddingHorizontal: 20,marginTop:10 
  },
  middleLeftView:{
    flex:0.8,justifyContent:"center"
  },
  middleLeftText:{
    color:"#E20000",fontSize: 20
  },
  middleRight:{
    flex:0.2
  },
  middlerightbutton:{
    width:60,height:60,backgroundColor: '#000000',borderRadius: 10,justifyContent:"center",alignItems:"center"
  },
  addusericon:{
    width:25,height:25,tintColor: 'white'
  },
  bottomView:{
    flex:0.5,paddingHorizontal: 10
  },
  listStyles:{
    flex:1,marginVertical: 20
  }

})




export default styles;


