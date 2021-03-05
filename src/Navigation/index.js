import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer,   getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import {   createDrawerNavigator, } from '@react-navigation/drawer';
import { Images, Colors, fonts } from "../common"; 
import {
  Login, LandingPage, SignUp,VerifyPassword,ResetPassword,ResetPasswordVerify,Home
} from '@containers'
import { SideBar } from "@components";
// import { Auth } from 'aws-amplify';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

export const AuthContext = React.createContext();

const LoginStackScreens = () =>{
    return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <LoginStack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
      <LoginStack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      <LoginStack.Screen name="VerifyPassword" component={VerifyPassword} options={{headerShown: false}}/>
      <LoginStack.Screen name="ResetPassword" component={ResetPassword} options={{title:"Reset Password",headerShown: true}}/>
      <LoginStack.Screen name="ResetPasswordVerify" component={ResetPasswordVerify} options={{title:"Verify Password",headerShown: true}}/>
    </LoginStack.Navigator>)
}
const HomeStackScreens = () =>{
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{title:"Home",headerShown: false}}/>
  </HomeStack.Navigator>)
}



const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.green,
  },
  headerTitleStyle: {
    color: "white",
    textAlign: "center",
    fontFamily: fonts.Regular,
  },
};



export default function Navigation({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      // try {
      //   userToken = await (await Auth.currentSession()).getAccessToken();
      // } catch (e) {
      //   // Restoring token failed
      // }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        try{
            // let response  = await Auth.signIn(email, password);
            
            // let token = await (await Auth.currentSession()).getAccessToken()
            dispatch({ type: 'SIGN_IN', token: token});
        } catch(e){
            throw e;
        }
      },
      signOut: async() => {
          // await Auth.signOut();
          dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

 
  return (
    <NavigationContainer>
      <HomeStackScreens></HomeStackScreens>
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

 

