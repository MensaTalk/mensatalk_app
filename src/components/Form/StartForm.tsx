import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {SignInUserInterface, SignUpUserInterface} from '../../types';
import FormButton from './FormButton';
import Title from '../utils/TextElement';
import Logo from '../utils/Logo';

export interface StartupFormProps {
  onSignUp: (signUpUser: SignUpUserInterface) => void;
  onSignIn: (signInUser: SignInUserInterface) => void;
}

const StartForm: React.FC<StartupFormProps> = ({
  onSignUp,
  onSignIn,
}: StartupFormProps) => {
  const validateSignUpForm = () => {
    const dummyUser: SignUpUserInterface = {
      username: '',
      email: '',
      password: '',
    };
    onSignUp(dummyUser);
  };

  const validateSignInForm = () => {
    const dummyUser: SignUpUserInterface = {
      username: '',
      email: '',
      password: '',
    };
    onSignIn(dummyUser);
  };

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.createButtonContainer}
            onPress={validateSignUpForm}>
            <Title text={'CREATE ACCOUNT'} style={styles.createButtonText} />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <FormButton buttonText={'LOGIN'} onClick={validateSignInForm} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFC',
    justifyContent: 'center',
  },
  form: {
    marginHorizontal: 25,
    marginVertical: 4,
  },
  createButtonContainer: {
    backgroundColor: '#5CBACB',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  createButtonText: {
    height: 60,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FAFCFC',
  },
});

export default StartForm;
