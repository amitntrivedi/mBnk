import React, { useState } from 'react'
import {View, Text, TouchableOpacity,Dimensions,Image } from 'react-native'

import styles from './styles'

const GridItem = (props) => {

	const {item} = props;
    return (
      
          <View 

            style={[styles.mainView,{height:Dimensions.get('window').width/props.numcolumns}]}>
            <View style={styles.subView}>
            <Image source={item.image} style={styles.imagestyles}/>
              <Text style={styles.subtext}>{item.name}</Text></View>
            </View>
    );
};
export default GridItem