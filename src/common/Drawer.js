// import { Platform, Dimensions } from "react-native";
// const { height, width } = Dimensions.get("window")
// export const isWeb = Platform.OS === 'web';
// export const isAndroid = Platform.OS === 'android';
// export const isIos = Platform.OS === 'ios';

// export const isIphoneX = Platform.OS === "ios" && (height > 800 || width > 800);

"use strict";
import { Images } from "../common"
export let Drawer = {
    //API_BASE_URL: "https://workapi.thinkebiz.net/mobile", // product_BaseURl

    SideBar: [
        {
            id: "1",
            title: "Password + Email",
            icon: Images.Invite,
            route: "ResetPassword"
        },
        {
            id: "2",
            title: "Invite Friends",
            icon: Images.Invite,
            route: "LandingPage"
        },
        {
            id: "3",
            title: "Privacy Preferences",
            icon: Images.Privacy,
            route: "ResetPassword"
        }, {
            id: "4",
            title: "Terms + Conditions",
            icon: Images.Terms,
            route: "CommunityGuideLines"
        },

        {
            id: "5",
            title: "Contact Us",
            icon: Images.Contact,
            route: "ResetPassword"
        },
        {
            id: "6",
            title: "Logout",
            icon: Images.Logout,
            route: "Logout"
        },

    ]
};