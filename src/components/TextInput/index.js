import React, { useState } from 'react'
import { Alert, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'


import {
    TextField,
    FilledTextField,
    OutlinedTextField,
  } from '@ubaids/react-native-material-textfield';
const TextInput = (props) => {
    const  fieldRef = React.createRef();

    const  onSubmit = () => {
        let { current: field } = this.fieldRef;
     
        console.log(field.value());
      };

  const  formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
      };


    return (
        <View style={{ flex: 1 }}>




<OutlinedTextField
          tintColor= "#1faa00"
        label={props.title}
        keyboardType={props.pad}
        formatText={ formatText()}
        onSubmitEditing={onSubmit()}
        ref={fieldRef}
      />


        </View>
    );
};
export default TextInput