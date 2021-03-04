import React from 'react';
import { StyleSheet, Dimensions } from 'react-native'
const { height: h, width: w } = Dimensions.get("window");
import { fonts, Colors } from '../../common';
const styles = StyleSheet.create({
    headerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: h * 0.09,
        width: w,
       
        borderWidth: 1,
        backgroundColor: Colors.green,
       
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#ddd',
        borderColor: '#ddd',
        elevation: 1,
        flexDirection: 'row'
    },
    badgeStyle: { position: 'relative', },
    badge: {
        position: 'absolute',
        zIndex: 10,
        top: 0,
        right: 0,
        //  left: 0,
        height: 6,
        width: 6,
        borderRadius: 3,
        bottom: 0,
        backgroundColor: "rgb(40,169,40)",
        marginRight: 7,
        marginTop: 8
    },
    notificationBadge: {
       
        height: 6,
        width: 6,
      
    },
    headerText: {
        fontSize: 20,
        fontFamily: fonts.Regular,
        color: Colors.white
    },
    iconView: { width:25,height:25,tintColor:'white'  },
    rightIconView: { flex: 0.1, flexDirection: 'row', }
})

export default styles;