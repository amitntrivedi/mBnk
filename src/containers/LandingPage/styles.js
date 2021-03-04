import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native'

const { height: h, width: w } = Dimensions.get("window");
const win = Dimensions.get('window');
const ratio = win.width / 541;
import { fonts, Images, Colors } from '../../common'

const styles = StyleSheet.create({

  image: {

    resizeMode: "cover",

    width: 50,
    height: 50,

  },
  Imgbackground: {
    padding: 10,
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center', alignItems: 'center', marginTop: -50

  },
  imageStyle: {

    width: win.width,
    height: 320
  },
  textHeader: {

    fontFamily: fonts.Regular,
    fontSize: 24,

    color: 'black'

  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 15,
    fontWeight: '400',
    textAlign: 'center'
  },
  card: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    height: 50, backgroundColor: 'green', borderWidth: 1, borderRadius: 6, borderColor: "green"
  },
  viewStyle: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  browsebutton: {
    height: 50, backgroundColor: 'white', borderWidth: 2, borderRadius: 6, borderColor: "green"
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,

  },
})




export default styles;


