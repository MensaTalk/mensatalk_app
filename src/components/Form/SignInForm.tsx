import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {SignUserInterface} from '../../types';
import FormInput from '../utils/FormInput';
import Logo from '../utils/Logo';
import Loading from '../utils/Loading';
import FormButton from '../utils/FormButton';
import Error from '../utils/Error';

export interface SignInFormProps {
  onSignIn: (signUser: SignUserInterface) => void;
  isLoading: boolean;
  error: string | undefined;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSignIn,
  isLoading,
  error,
}: SignInFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const user: SignUserInterface = {
      username: username,
      password: password,
    };
    onSignIn(user);
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
          <FormButton
            buttonText={'Login'}
            onClick={validateForm}
            reverse={true}
            disabled={username.length === 0 || password.length === 0}
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
  },
  form: {
    marginHorizontal: 25,
    marginVertical: 4,
  },
});

export default SignInForm;
