import React, {useState, useEffect} from 'react';
import {View, Text, Image, Keyboard, TouchableOpacity} from 'react-native';
import {Validations} from '../../helpers';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';

import {Images, Colors, fonts, Loader} from '../../common';
import Toast from 'react-native-toast-message';
import {Button} from '../../components';
import styles from './styles';
// import {Auth} from 'aws-amplify';
import VerifyPassword from '../VerifyPassword';
export default function ResetPasswordVerify(props) {
  const fieldRef = React.createRef();

  const {navigation} = props;
  const [loading, setLoading] = useState(flase)
  const [email, setEmail] = useState(props.route.params.username || '');

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeErr, setVerificationCodeErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

  const [Ind, setInd] = useState(0);
  const onVerificationCode = (txt) => {
    setVerificationCode(txt);
    console.log(txt);
  };

  const onPassword = (txt) => {
    setPassword(txt);
    console.log(txt);
  };
  const onConfirmPassword = (txt) => {
    setConfirmPassword(txt);
    console.log(txt);
  };

  const resetMethod = async () => {
    Keyboard.dismiss();
    if (verificationCode === '' || verificationCode == undefined) {
      setVerificationCodeErr('Please enter varification code');
    } else if (verificationCode.length != 6) {
      setVerificationCodeErr('Please enter valid verification code');
    } else if (password === '' || password == undefined) {
      setVerificationCodeErr('');
      setPasswordError('Please enter password');
    }
    //
    else if (!Validations.validatePassword(password)) {
      setVerificationCodeErr('');
      setPasswordErr('Please enter valid password');
    } else if (password != confirmPassword) {
      setVerificationCodeErr('');
      setConfirmPasswordErr('Password doesnt match');
    } else {
      setLoading(true)
      try {
        // let response = await Auth.forgotPasswordSubmit(
        //   email,
        //   verificationCode,
        //   password,
        // );
        setLoading(false)
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Password has been reset successfully',
        });

        navigation.navigate('Login');
      } catch (e) {
        setLoading(false)
        Toast.show({type: 'error', text1: 'Error', text2: e.message});
        // alert(e.message);
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
            Please enter verification code received on {email} and new password
          </Text>
        </View>
        <View style={{height: 20}} />
        <OutlinedTextField
          tintColor="#1faa00"
          label="Verification Code"
          error={verificationCodeErr}
          onChangeText={onVerificationCode}
          ref={fieldRef}
        />
        <View style={{height: 5}} />
        <View style={{height: 20}} />
        <OutlinedTextField
          tintColor="#1faa00"
          label="Password"
          error={passwordErr}
          onChangeText={onPassword}
          ref={fieldRef}
        />
        <View style={{height: 5}} />
        <View style={{height: 20}} />
        <OutlinedTextField
          tintColor="#1faa00"
          label="Confirm Password"
          error={confirmPasswordErr}
          onChangeText={onConfirmPassword}
          ref={fieldRef}
        />
      </View>
      <View style={{marginHorizontal: 15, marginBottom: 10}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            resetMethod();
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Loader loading={loading}></Loader>
    </View>
  );
}
