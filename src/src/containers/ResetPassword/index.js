import React, {useState, useEffect} from 'react';
import {View, Text, Image, Keyboard, TouchableOpacity} from 'react-native';
import {Validations} from '../../helpers';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';
import Toast from 'react-native-toast-message';
import {Images, Colors, fonts, Loader} from '../../common';

import {Button} from '../../components';
import styles from './styles';
// import {Auth} from 'aws-amplify';
export default function ResetPassword(props) {
  const fieldRef = React.createRef();

  const {navigation} = props;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [Ind, setInd] = useState(0);

  const onSubmitEmail = (txt) => {
    setEmail(txt);
    console.log(txt);
  };

  const resetMethod = async () => {
    Keyboard.dismiss();
    if (email === '' || email == undefined) {
      setEmailError('Please Enter Email');
    } else if (!Validations.email(email)) {
      setEmailError('Please enter valid email');
    } else {
      setLoading(true);
      setEmailError('');
      try {
        // let response = await Auth.forgotPassword(email);
        setLoading(false);
        navigation.navigate('ResetPasswordVerify', {username: email});
      } catch (e) {
        setLoading(false);
        Toast.show({type: 'error', text1: 'Error', text2: e.message});
        // alert(e.message)
      }
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
      <View style={{flex: 0.1}}></View>
      <View style={{flex: 0.9, paddingHorizontal: 15}}>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.textHeader}>Reset Password</Text>
          <View style={{height: 6}} />
          <Text style={styles.textForgot}>
            Please enter your username or email address to receive a password
            reset request.
          </Text>
        </View>
        <View style={{height: 20}} />

        {Ind == 0 ? (
          <OutlinedTextField
            tintColor="#1faa00"
            label="Your Email"
            error={emailError}
            keyboardType="email-address"
            onChangeText={onSubmitEmail}
            ref={fieldRef}
          />
        ) : Ind == 1 ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'contain'}}
              source={Images.mail}
            />
            <View style={{height: 10}} />
            <Text style={[styles.textHeader, {fontSize: 18}]}>
              Please Check your email
            </Text>
            <View style={{height: 10}} />
            <Text style={styles.textForgot} numberOfLines={2}>
              We sent an email to chay@chayland.com if you are unable to find
              the email,please check your spam folder.
            </Text>
          </View>
        ) : (
          <View />
        )}

        <View style={{height: 60}} />
      </View>
      <View style={{marginHorizontal: 15, marginBottom: 10}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            resetMethod();
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Loader loading={loading}></Loader>
    </View>
  );
}
