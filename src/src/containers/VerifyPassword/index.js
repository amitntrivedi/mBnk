import React, { useState, useEffect } from 'react';
import {
  View, Text, Image,
  Keyboard, TouchableOpacity
} from 'react-native'
import { Validations } from "../../helpers"
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';
import Toast from 'react-native-toast-message';
import { Images, Colors, fonts, Loader } from "../../common";
// import { Auth } from 'aws-amplify';
import { Button } from "../../components"
import styles from "./styles"
export default function VerifyPassword(props) {
  const fieldRef = React.createRef();

  const { navigation } = props;
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(props.route.params.username || '')
  const [emailError, setEmailError] = useState('')
  const [Ind, setInd] = useState(0)
  const [verificationCode, setVerificationCode] = useState('')
  const [verificationCodeErr, setVerificationCodeErr] = useState('')
  
  const onSubmitCode = async(txt)=>{
    setVerificationCode(txt);
    
  }
  const onVerifyEmail = async() => {
    
    if (verificationCode === '' || verificationCode == undefined) {
      setVerificationCodeErr("Please enter Code");
    } else if (verificationCode.length != 6) {
      setVerificationCodeErr("Code must have 6 digits");
    } else {
      setVerificationCodeErr("")
      setLoading(true)
      try{
        // let response = await Auth.confirmSignUp(email, verificationCode);
        setLoading(false)
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Email has been verified successfully',
        });
        // alert('Email has been verified successfully')
        navigation.navigate("Login")
        // console.log(response)
      }catch(e){
        setLoading(false)
        Toast.show({type: 'error', text1: 'Error', text2: e.message});
        // alert(e.message)  
      }
      
    } 

  };

  const resendVarificationCode = async() => {

    Keyboard.dismiss();
    setLoading(true)
    try{
      // let response = await Auth.resendSignUp(email)
      setLoading(false)
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Verification Code has been sent successfully',
      });
      // console.log(response);
    }catch(e){
      setLoading(false)
      Toast.show({type: 'error', text1: 'Error', text2: e.message});
      // alert(e.message)

    }
    
  }


  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
      <View style={{ flex: 0.1, }}>
        <View style={styles.headerContent}  >
          <TouchableOpacity onPress={() => { navigation.goBack() }} >
            <Image source={Images.back} style={styles.iconView} />
          </TouchableOpacity>

        </View>

      </View>

      <View style={{ flex: 0.9, paddingHorizontal: 15 }}>
        <View style={{ alignItems: 'center', paddingHorizontal: 15 }}>

          <View style={{ height: 20 }} />


          <Text style={styles.textHeader}>Our community prides</Text>
          <Text style={styles.textHeader}>itself on safety</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.textForgot}>Verfifying your email is the first step in insuring a safer community.</Text>
        </View>
        <View style={{ height: 20 }} />

        
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
            source={Images.mail}
          />
          <View style={{ height: 30 }} />
          <Text style={[styles.textHeader, { fontSize: 18, }]}>Please Check your email</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.textForgot} numberOfLines={2}>We sent an email to {email} if you are unable to find the email,please check your spam folder.</Text>
         </View>
         <View>
         <View style={{ height: 20 }} />
         <OutlinedTextField
          tintColor="#1faa00"
          label='Verification Code'
          error={verificationCodeErr}
          onChangeText={onSubmitCode}          
        />
        <TouchableOpacity style={styles.button}
          onPress={() => { onVerifyEmail() }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.btntext}>Verify Email</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      
      <View style={{ marginHorizontal: 15, marginBottom: 10 }}>


        <Text style={styles.text}>Didn’t recieve an email?</Text>


        <View style={{ height: 15 }} />

        <TouchableOpacity
          onPress={() => { resendVarificationCode() }}>

          <Text style={styles.link}>Resend Verification</Text>

        </TouchableOpacity>
        <View style={{ height: 30 }} />
      </View>

    </View>
  )
}
