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
    paddingVertical: 10,
    fontFamily: fonts.Bold,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'

  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'

  },
  image: {
    width: 20, height: 20, tintColor: 'white'
  },
  button: {
    height: 55, backgroundColor: 'green', borderWidth: 1, borderRadius: 6, borderColor: "green"
  },
})




export default styles;


