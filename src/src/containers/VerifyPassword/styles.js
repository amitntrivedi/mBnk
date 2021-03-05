import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");

import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  images: {

    resizeMode: "cover",

    width: 45,
    height: 45,

  },
  textHeader: {
    textAlign: 'center',
    fontFamily: fonts.Regular,
    fontSize: 30,
    color: Colors.lightblack,
    fontWeight: '500'

  }, headerContent: {

    alignItems: 'center',
    height: h * 0.09,
    width: w,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',

    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#ddd',
    borderColor: '#ddd',
    elevation: 1,
    flexDirection: 'row'
  }, iconView: { width: 15, height: 15, tintColor: 'black' },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center'

  },
  textForgot: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    color: Colors.lightblack,
    fontWeight: '400',
    textAlign: 'center'

  },
  link: {
    textAlign: 'center',
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
  button: {
    height: 55, backgroundColor: 'green', borderWidth: 1, borderRadius: 6, borderColor: "green"
  },
})




export default styles;


