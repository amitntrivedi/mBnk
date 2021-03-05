import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  TextInput,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from '@ubaids/react-native-material-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Images, Colors, fonts, Loader} from '../../common';
import Toast from 'react-native-toast-message';
// import {Button} from '../../components';
import styles from './styles';
import {Validations} from '../../helpers';
// import {color} from 'react-native-reanimated';
// import {Auth} from 'aws-amplify';
import {AuthContext} from '@Navigation';
import SplashScreen from 'react-native-splash-screen'

export default function Login(props) {
  useEffect(() => {
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      SplashScreen.hide();
    }, 500);
  }, []);

  // const {signIn} = React.useContext(AuthContext);

  const fieldRef = React.createRef();
  const fieldRef1 = React.createRef();
  const {navigation} = props;

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const logInMethod = async () => {
    const fieldRef = React.createRef();
    const fieldRef1 = React.createRef();

    const {navigation} = props;
    Keyboard.dismiss();
    if (email === '' || email == undefined) {
      setEmailError('Please Enter Email');
      setPasswordError('');
    } else if (!Validations.email(email)) {
      setEmailError('Please enter valid email');
      setEmailError('');
    } else if (password === '' || password == undefined) {
      setEmailError('');
      setPasswordError('Please enter password');
    } else if (!Validations.validatePassword(password)) {
      setEmailError('');
      setPasswordError(
        'Password contain at least one number,one lowercase and one uppercase letter and at least six characters',
      );
    } else {
      setPasswordError('');
      setEmailError('');
      setLoading(true);
      try {
        // await signIn(email, password);
        setLoading(false);
      } catch (e) {
        if (e.code == 'UserNotConfirmedException') {
          // let response = await Auth.resendSignUp(email);
          navigation.navigate('VerifyPassword', {username: email});
        } else if (e.message) {
          Toast.show({type: 'error', text1: 'Error', text2: e.message});
          // alert(e.message);
        } else {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Incorrect Username/Password',
          });
        }
        setLoading(false);
      }
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const onSubmitEmail = (txt) => {
    // let { current: field } = fieldRef;

    setEmail(txt);
    // console.log(field.value());
  };

  const onSubmitPass = (txt) => {
    // let { current: field } = fieldRef1;
    setPassword(txt);

    // console.log(txt);
  };

  const formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15, backgroundColor: 'white'}}>
      <View style={{flex: 0.3}}></View>
      <View style={{flex: 0.7}}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={Images.mbanklogo} resizeMode="contain" />
        </View>
        <View style={{height: 25}} />
        <OutlinedTextField
          tintColor="#1faa00"
          label="Mobile Number"
          error={emailError}
          keyboardType="email-address"
          onChangeText={onSubmitEmail}
          ref={fieldRef}
        />

        <View style={{height: 5}} />

        {/* <OutlinedTextField
          tintColor="#1faa00"
          label="Password"
          secureTextEntry={true}
          // keyboardType="email-address"
          error={passwordError}
          onChangeText={onSubmitPass}
          ref={fieldRef1}
        /> */}
        <View style={{height: 5}} />

        <View style={{height: 5}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.text}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btnbg}
          onPress={() => {
            logInMethod();
          }}>
          <Text style={styles.btntext}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={{height: 25}} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.text, {textAlign: 'center', color: 'black'}]}>
            ARE YOU A NEW USER ?{' '}
            <Text style={styles.text}>Join Now !</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 25}} />
      <Loader loading={loading}></Loader>
    </View>
  );
}
