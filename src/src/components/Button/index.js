import React, { useState } from 'react'
import {View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Button = (props) => {
    return (
        <View style={{ flex: 1 }}>

<TouchableOpacity style={styles.button} onPress={() => props.method()}>
           
                <Text style={styles.buttonText}>{props.title}</Text>
            
        </TouchableOpacity >

        </View>
    );
};
export default Button