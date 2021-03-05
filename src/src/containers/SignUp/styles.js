import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");

import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  image: {

    resizeMode: "cover",
    tintColor: 'white',
    width: 15,
    height: 15,

  },
  checkedBoxView: { flex: 0.10, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 4 },



  checkedLabelText: { fontFamily: fonts.Regular, fontSize: 16, fontWeight: '400', color: Colors.secondaryBlack, paddingLeft: 10 }
  ,

  checkedLabelText1: { fontFamily: fonts.Bold, fontSize: 16, fontWeight: '400', color: 'black', paddingLeft: 10 }
  ,



  textHeader: {
    paddingVertical: 10,
    fontFamily: fonts.Bold,
    fontSize: 23,
    color: 'black',
    textAlign: 'left'

  },

  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: Colors.green,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  image: {
    width: 20, height: 20, tintColor: 'white'
  },
  btntext: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: 'white',
    fontWeight: '700',

  },
  btnbg: {
    height: 55, backgroundColor: Colors.green, borderWidth: 1, borderRadius: 6, borderColor: Colors.green, justifyContent: 'center', alignItems: 'center'
  },


})




export default styles;


