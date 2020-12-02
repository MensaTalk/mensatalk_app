import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {SignInUserInterface} from '../../types';

export interface SignInFormProps {
  onSignIn: (signInUser: SignInUserInterface) => void;
  onRedirectSignUp: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSignIn,
  onRedirectSignUp,
}: SignInFormProps) => {
  const validateForm = () => {
    const dummyUser: SignInUserInterface = {username: '', password: ''};
    onSignIn(dummyUser);
  };

  return (
    <>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require('../../assets/images/gradient.png')}>
            <View style={styles.logoColumn}>
              <View style={styles.logo}>
                <View style={styles.endWrapperFiller} />
                <View style={styles.text3Column}>
                  <Text style={styles.text3}>mt</Text>
                  <View style={styles.rect7} />
                </View>
              </View>

              <View style={styles.form}>
                <View style={styles.usernameColumn}>
                  <View style={styles.username}>
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.usernameInput}
                    />
                  </View>
                  <View style={styles.password}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.passwordInput}
                    />
                  </View>
                </View>
                <View style={styles.usernameColumnFiller} />
                <TouchableOpacity style={styles.button} onPress={validateForm}>
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.logoColumnFiller} />
            <View style={styles.footerTexts}>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => onRedirectSignUp()}>
                <View style={styles.createAccountFiller} />
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.button2Filler} />
              <Text style={styles.needHelp}>Need Help?</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
  },
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  logo: {
    width: 102,
    height: 111,
    alignSelf: 'center',
  },
  endWrapperFiller: {
    flex: 1,
  },
  text3: {
    color: 'rgba(255,255,255,1)',
    fontSize: 80,
    marginBottom: 4,
  },
  rect7: {
    height: 8,
    backgroundColor: '#25cdec',
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: 3,
  },
  form: {
    height: 230,
    marginTop: 59,
  },
  username: {
    height: 60,
    backgroundColor: 'rgba(251,247,247,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon22: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    marginLeft: 20,
    alignSelf: 'center',
  },
  usernameInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginHorizontal: 10,
  },
  password: {
    height: 59,
    backgroundColor: 'rgba(253,251,251,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 27,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    marginLeft: 20,
    alignSelf: 'center',
  },
  passwordInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginHorizontal: 10,
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1,
  },
  button: {
    height: 59,
    backgroundColor: 'rgba(31,178,204,1)',
    borderRadius: 5,
    justifyContent: 'center',
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41,
  },
  logoColumnFiller: {
    flex: 1,
  },
  footerTexts: {
    height: 14,
    flexDirection: 'row',
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36,
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: 'flex-end',
  },
  createAccountFiller: {
    flex: 1,
  },
  createAccount: {
    color: 'rgba(255,255,255,0.5)',
  },
  button2Filler: {
    flex: 1,
    flexDirection: 'row',
  },
  needHelp: {
    color: 'rgba(255,255,255,0.5)',
    alignSelf: 'flex-end',
    marginRight: -1,
  },
});

export default SignInForm;
