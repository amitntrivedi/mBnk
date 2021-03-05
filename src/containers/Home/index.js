import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  TextInput,
  StatusBar,
  Dimensions,
   FlatList
} from 'react-native';

import {Images, Colors, fonts, Loader} from '../../common';
import GridItem from '../../components/GridItem';
import AddButton from '../../components/AddButton';

import styles from './styles';

export default function Home(props) {
  const numcolumns = 3
   const dataSource = [
    {
      name:"DIRECT MONEY TRANSFER",
      image: Images.transfer
    },
     {
      name:"mATM",
      image: Images.calculator
    },
     {
      name:"DTH RECHARGE",
      image: Images.transfer
    },
     {
      name:"MOBILE RECHARGE",
      image: Images.transfer
    },
     {
      name:"DIRECT MONEY TRANSFER",
      image: Images.transfer
    },
     {
      name:"DIRECT MONEY TRANSFER",
      image: Images.transfer
    },
    
   ]
  useEffect(() => {

  }, []);
  const renderItem = ({item}) => {
    return(
        <GridItem item={item} numcolumns={numcolumns}/>
      )
  }
  return (
    <View style={styles.mainView}>
    <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#000000"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
     <View style={styles.topView}>
        <Text style={styles.dateText}>2019/12/03</Text>
        <View>
        <Text style={styles.balancetext}>MVP Account Balance</Text>
        <Text style={styles.amttext}>4564547 ₹</Text></View>
         <AddButton/>
     </View>
      <View style={styles.middleView}>
       <View style={styles.middleLeftView}>
       <Text style={styles.middleLeftText}>Add a new customer and choose the intent</Text></View>
       <View style={styles.middleRight}>
       <View style={styles.middlerightbutton}>
       <Image source={Images.addUser} style={styles.addusericon}/>
       </View>
       </View>
      </View>
     <View style={styles.bottomView}>
           <FlatList
            data={dataSource}
            renderItem={renderItem}
            //Setting the number of column
            numColumns={numcolumns}
            style={styles.listStyles}
            keyExtractor={(item, index) => index.toString()}
/>
     </View>
    </View>
  );
}
