import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './styles'
import { Images } from '../../common'

const Header = (props) => {
    let { routing, hideIcon, onBack,img } = props;
    const onBackNavigation = () => {
       
           alert("hii")
       
    }
     const searchNavigation = () => {
        onBack()
     }

    
    return (
        // <View style={styles.headerContent}>
        //     {hideIcon ? (null) : routing === "Sign In" ? (<View style={styles.iconView} />) : routing === "Dashboard" ?
        //         <TouchableOpacity style={styles.iconView} onPress={() => props.navigation.openDrawer()}>
        //             <Image source={images.menu} />
        //         </TouchableOpacity> :
        //         <TouchableOpacity onPress={() => { onBackNavigation() }}
        //             style={styles.iconView}>
        //             <Image source={images.left} />
        //         </TouchableOpacity>}
        //     <View style={{ flex: 0.8, alignItems: routing === "Dashboard" ? "flex-start" : 'center', }}>
        //         {routing === "Sign In" || routing === "Dashboard" ? (
        //             <Image source={images.banner} />
        //         ) : (
        //                 <Text style={[styles.headerText, { marginLeft: routing === "Dashboard" ? 10 : 0 }]}>{routing}</Text>
        //             )}

        //     </View>
        //     {routing === "Dashboard" ? (
        //         <View style={styles.rightIconView} >
        //             {/* <TouchableOpacity
        //                 style={styles.badgeStyle}>
        //                 <View style={styles.badge}>
        //                 </View>
        //                 <Image source={images.user} />
        //             </TouchableOpacity>
        //             <TouchableOpacity
        //                 style={styles.badgeStyle}
        //                 onPress={() => props.navigation.navigate("Notifications")}>
        //                 <View style={styles.notificationBadge} />
        //                 <Image source={images.notify} style={{ marginLeft: 15 }} />
        //             </TouchableOpacity> */}

        //         </View>
        //     ) : (
        //             <View style={styles.rightIconView} />
        //         )}

        // </View>
    
        <View style={styles.headerContent}  >
              {/* <TouchableOpacity onPress={() => { onBackNavigation() }}
                   >
                     <Image source={Images.back} style={styles.iconView}/>
                 </TouchableOpacity> */}
                    <View style={{ flex: 0.8, alignItems:  'center', }}>
              
                         <Text style={[styles.headerText,]}>{routing}</Text>
                   

            </View>
            <View style={styles.rightIconView} >
      
                     <TouchableOpacity
                         style={styles.badgeStyle}
                        onPress={() => {searchNavigation()}}>
                        <View style={styles.notificationBadge} />
                         <Image source={img} style={styles.iconView} />
                    </TouchableOpacity> 

                </View>
    </View>
    
    )
}

export default Header
