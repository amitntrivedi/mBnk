import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");

import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  image: {

    resizeMode: "cover",

    width: 150,
    height:70
    // height: 34,

  },
  textHeader: {
    paddingVertical: 10,
    fontFamily: fonts.Regular,
    fontSize: 20,
    color: 'black'

  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: Colors.theme,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  btntext: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: 'white',
    fontWeight: '700',

  },
  btnbg: {
    height: 55, backgroundColor: Colors.theme, borderWidth: 1, borderRadius: 6, borderColor: Colors.theme, justifyContent: 'center', alignItems: 'center'
  },


})




export default styles;


