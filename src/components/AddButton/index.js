import React, { useState } from 'react'
import {View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './styles'
import {Images, Colors, fonts, Loader} from '../../common';
const AddButton = (props) => {
    return (
     <TouchableOpacity style={{width:"50%", height:45,flexDirection: 'row' ,
              borderRadius: 5,
             justifyContent:'center',
             alignItems:'center',
             alignSelf: 'center',
             backgroundColor:"#E20000"}}>
             <Text style={{color:"white",marginRight:5, fontWeight:"600"}}>Add Money</Text>
             <Image source={Images.plus} style={{width:20,height:20,tintColor: 'white',marginLeft: 5}}/>
       </TouchableOpacity>
    );
};
export default AddButton