import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import {SignUserInterface} from '../../types';
import FormInput from './FormInput';
import Title from '../utils/TextElement';
import Logo from '../utils/Logo';

export interface SignInFormProps {
  onSignIn: (signUser: SignUserInterface) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({onSignIn}: SignInFormProps) => {
  const validateForm = () => {
    const dummyUser: SignUserInterface = {username: '', password: ''};
    onSignIn(dummyUser);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <FormInput placeholderText={'Username'} secure={false} />
        </View>
        <View style={styles.form}>
          <FormInput placeholderText={'Password'} secure={true} />
        </View>
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.createButtonContainer}
            onPress={validateForm}>
            <Title text={'LET ME IN'} style={styles.createButtonText} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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

export default SignInForm;
