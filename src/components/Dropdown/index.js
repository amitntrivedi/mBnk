
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

import { colors,fonts,images } from '../../common';
const Dropdown = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <RNPickerSelect
                placeholder={{
                    label: props.placeholder,
                    value: null,
                }}
                onValueChange={(value)=>props.onValueChange(value)}
                items={props.items}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                        top: 16,
                         right:2,
                    },
                    placeholder: {
                        color: 'black',
                        fontSize: 12,
                        fontFamily:fonts.Regular,
                       textAlign:'center',
                      
                       bottom: 0,
                         right:2
                    },
                }}
                // Icon={() => {
                //     return (
                //         <Image source={images.downArrow} style={{ height: 15, width: 15, tintColor:'white' }} />
                //     );
                // }}
            />
        </View>
    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        color: 'black',
        fontFamily:fonts.Regular,
        justifyContent:'center',
        alignItems:'center'
    },
    inputAndroid: {
        height:40,
        width:"100%",
        fontFamily:fonts.Regular,
        fontSize: 12,
        color: 'black',
        bottom: 0,
        fontFamily:fonts.Regular,
    //     backgroundColor: colors.light_gray,
    //    borderRadius:5,
    //     borderColor:colors.light_gray,
    //     borderWidth:0,
    //     fontSize: 16,
    //     shadowColor: "#5d4a11",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,

    //     elevation: 5,
      
      
       
    },
});
export default Dropdown