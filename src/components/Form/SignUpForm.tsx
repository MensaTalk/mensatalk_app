import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {SignUpUserInterface} from '../../types';
import FormInput from '../utils/FormInput';
import Logo from '../utils/Logo';
import Loading from '../utils/Loading';
import FormButton from '../utils/FormButton';
import Error from '../utils/Error';

export interface SignUpFormProps {
  onSignUp: (signUser: SignUpUserInterface) => void;
  isLoading: boolean;
  error: string | undefined;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSignUp,
  isLoading,
  error,
}: SignUpFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const validateForm = () => {
    const signUser: SignUpUserInterface = {
      username: username,
      password: password,
      confirmedPassword: confirmedPassword,
    };
    onSignUp(signUser);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <Logo />
        <Loading isVisible={isLoading} />
        <View style={styles.form}>
          <Error errorMessage={error} />
        </View>
        <View style={styles.form}>
          <FormInput
            placeholderText={'Username'}
            secure={false}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.form}>
          <FormInput
            placeholderText={'Password'}
            secure={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.form}>
          <FormInput
            placeholderText={'Confirm Password'}
            secure={true}
            onChangeText={(text) => setConfirmedPassword(text)}
          />
        </View>
        <View style={styles.form}>
          <FormButton
            buttonText={'Create account'}
            onClick={validateForm}
            reverse={true}
            disabled={
              username.length === 0 ||
              password.length === 0 ||
              confirmedPassword.length === 0
            }
          />
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

    paddingBottom: 20,
  },
  form: {
    marginHorizontal: 25,
    marginVertical: 4,
  },
});

export default SignUpForm;
