import React, { useState, useEffect } from 'react';
import { View, Text, Image, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Validations } from "../../helpers"
import CheckBox from '@react-native-community/checkbox';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';
import Toast from 'react-native-toast-message';

import { Images, Colors, fonts,Loader } from "../../common";
import styles from "./styles"
import { Button } from "../../components"
// import { Auth } from 'aws-amplify';
import {AuthContext} from '@Navigation'

export default function SignUp(props) {
  const fieldRef = React.createRef();
  const fieldRef1 = React.createRef();
  const fieldRef2 = React.createRef();
  const { navigation } = props;
  const [loading, setLoading] = useState(false)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleCheckBoxErr, setToggleCheckBoxErr] = useState('')
  
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [verifyPassword, setverifyPassword] = useState('')
  const [verifyPasswordError, setverifyPasswordError] = useState('')

  
  const signUpMethod = async() => {
    Keyboard.dismiss();
    if (email === '' || email == undefined) {
      setEmailError("Please Enter Email")
      setPasswordError("")
    }
    else if (!Validations.email(email)) {
      setEmailError("Please enter valid email")
      setPasswordError("")
    }
    else if (password === '' || password == undefined) {
      setEmailError("")
      setPasswordError("Please enter password")
    }
    // 
    else if (!Validations.validatePassword(password)) {
      setEmailError("")
      setPasswordError("Please enter valid password")
    }
    else if (password != verifyPassword) {
      setEmailError("")
      setverifyPasswordError("Password doesnt match")
    
    }else if (!toggleCheckBox) {
      Toast.show({type: 'error', text1: 'Error', text2: "Please agree to Terms & Conditions"});
      // alert("Please agree to Terms & Conditions");
      // setToggleCheckBoxErr("Please agree Terms & Conditions");
        // console.log(toggleCheckBox)
    } else {
      setLoading(true)
      setverifyPasswordError("")
      setPasswordError("")
      setEmailError("")
      
      try{
        // await Auth.
        // let response = await Auth.signUp({username:email, password:password})
        setLoading(false)
        navigation.navigate('VerifyPassword', {username:response.user.username})
      } catch(e) {
        setLoading(false)
        Toast.show({type: 'error', text1: 'Error', text2: e.message});
        // alert(e.message);        
      }
    }
    // else {
    //     setExistEmail(true)
    //     if (existEmail) {
    //         if (password === '' || password == undefined) {
    //             // Alert.alert('BAU Covid', 'Please enter password')
    //             Toast({ message: "Please enter Password", type: "warn", delay: 4000 })
    //         } else if (password.length < 6 || password.length > 8) {
    //             // Alert.alert('BAU Covid', 'Password should between 6 to 8 characters')
    //             Toast({ message: "Password should between 6 to 8 characters", type: "warn", delay: 4000 })
    //         } else {
    //             signIn()
    //         }
    //     }
    // }
  }



  const onSubmitEmail = (txt) => {
    // let { current: field } = fieldRef;

    setEmail((txt).trim())
    console.log(txt);

  };

  const onSubmitPass = (txt) => {
    // let { current: field } = fieldRef1;
    setPassword((txt).trim())

    console.log(txt);

  };
  const onSubmitVerifyPass = (txt) => {
    // let { current: field } = fieldRef2;
    setverifyPassword((txt).trim())

    console.log(txt);

  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', paddingHorizontal: 15 }}>
      <View style={{ flex: 0.2 }}>

      </View>
      <View style={{ flex: 0.8, }}>





        <Text style={styles.textHeader}>Create an Account</Text>

        <View style={{ height: 5 }} />
        <OutlinedTextField
          tintColor="#1faa00"

          label='Your Email'
          error={emailError}
          keyboardType='email-address'

          onChangeText={onSubmitEmail}
          ref={fieldRef}
        />
        <View style={{ height: 5 }} />



        <OutlinedTextField
          tintColor="#1faa00"
          label='Password'

          keyboardType='email-address'
          error={passwordError}
          onChangeText={onSubmitPass}
          ref={fieldRef1}
        />
        <View style={{ height: 5 }} />



        <OutlinedTextField
          tintColor="#1faa00"
          label='Verify Password'

          keyboardType='email-address'
          error={verifyPasswordError}
          onChangeText={onSubmitVerifyPass}
          ref={fieldRef2}
        />

        <View style={{ height: 15 }} />
        <View style={styles.checkedBoxView}>
          <CheckBox
            tintColors={{ true: 'black', false: 'black' }}
            disabled={false}
            error={toggleCheckBoxErr}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <View >
            <Text style={styles.checkedLabelText} numberOfLines={2}>By creating an account, you agree to our</Text>

            <Text style={styles.checkedLabelText1}>Terms & Conditions</Text>
          </View>
        </View>
        <View style={{ height: 20 }} />



      </View>
      <View>
        <TouchableOpacity style={styles.btnbg}
          onPress={() => { signUpMethod() }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.btntext}>CONTINUE</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ height: 10 }} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.text, { textAlign: 'center', color: 'black' }]}>Already have an account ? <Text style={styles.text}>signIn</Text></Text>

      </TouchableOpacity>


      <View style={{ height: 25 }} />
      <Loader loading={loading}></Loader>
    </View>
  )
}
