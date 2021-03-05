import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");

import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  mainView: {
    flex: 1, backgroundColor: 'white'
  },
  topView: {
    flex: 0.4,
    paddingLeft: 20, justifyContent: "space-evenly", backgroundColor: '#000000DD', borderBottomWidth: 1,
    borderColor: 'black', borderBottomRightRadius: 25, borderBottomLeftRadius: 25,
    shadowOffset:{height:5, width:0},
    shadowOpacity:0.5,
    shadowColor:"#000000",
    elevation:5,


  },
  dateText: {
    color: "white", fontSize: 18
  },
  balancetext: {
    color: "#E20000", 
    fontSize: 20,
    fontWeight:"700",
    fontFamily:"Roboto-Bold"
  },
  amttext: {
    color: "white", 
    fontSize: 25,
    // fontWeight:"700",
    fontFamily:"Roboto-Bold"
  },
  middleView: {
    flex: 0.1, 
    flexDirection: 'row',
    justifyContent: "space-evenly", alignItems: 'center', paddingHorizontal: 20, marginTop: 10,
    
  },
  middleLeftView: {
    flex: 0.8, justifyContent: "center"
  },
  middleLeftText: {
    color: "#E20000", fontSize: 20
  },
  middleRight: {
    flex: 0.2
  },
  middlerightbutton: {
    width: 60, height: 60, backgroundColor: '#000000', borderRadius: 10, justifyContent: "center", alignItems: "center"
  },
  addusericon: {
    width: 25, height: 25, tintColor: 'white'
  },
  bottomView: {
    flex: 0.5, paddingHorizontal: 10
  },
  listStyles: {
    flex: 1, marginVertical: 20
  }

})




export default styles;


