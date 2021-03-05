import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
import { Colors, fonts } from '../../common';
const { height: h, width: w } = Dimensions.get("window");

const styles = StyleSheet.create({
    topView: { flex: 0.2, backgroundColor: Colors.theme, alignItems: 'center', justifyContent: 'center' },
    image: {
        height: 86,
        width: 86,
        borderRadius: 43,
        borderWidth: 3,
        borderColor: Colors.white
    },
    letterText: {

        color: Colors.black,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.Bold
    },
    imageView: {
        height: 86,
        width: 86,
        borderRadius: 43,
        borderWidth: 3,
        borderColor: Colors.white,
        backgroundColor: Colors.lightTheme,
        alignItems: 'center', justifyContent: 'center'
    },
    name: {
        color: Colors.black,
        fontFamily: fonts.SemiBold,
        fontSize: 18,
        marginTop: 7
    },
    row: {
        padding: 15,
        borderTopWidth: 1,
        borderColor: "#F5F6F5",
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: "rgb(51,51,51)",
        fontFamily: fonts.Medium,
        fontSize: 15,
        marginLeft: 15
    },
    logoView: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;