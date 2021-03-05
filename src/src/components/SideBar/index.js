import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native'
import styles from './styles'
import { Drawer } from '../../common'
import {AuthContext} from '@Navigation'



const SideBar = (props) => {
    const [profileImage, setProfileImage] = useState(null)
    const [userDetails, setUserDetails] = useState(null)
    const { signOut } = React.useContext(AuthContext);
    const onItem = (item) => {
        // alert(item.title)
        props.navigation.closeDrawer()
        if (item.route === "Logout") {
            Alert.alert(
                "mBnk",
                'Are you sure you want to logout?',

                [
                    {
                        text: 'OK', onPress: () => {
                          
                            signOut()
                        }
                    },
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                ],
                { cancelable: false },
            );
        } else {
            // console.log("PROPSSSSSS-----", props.navigation);
            props.navigation.navigate(item.route, { router: "SideBar" })
        }

    }
  
   
    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.row} onPress={() => onItem(item)}>
                <Image source={item.icon} />
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        )
    }



    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, }} >
                <FlatList
                    data={Drawer.SideBar}
                    renderItem={_renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default SideBar;
// export default SideBar
