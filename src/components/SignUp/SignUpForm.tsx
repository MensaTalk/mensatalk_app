import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {SignUpUserInterface} from '../../types';

export interface SignUpFormProps {
  onSignUp: (signUpUser: SignUpUserInterface) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({onSignUp}: SignUpFormProps) => {
  const validateForm = () => {
    const dummyUser: SignUpUserInterface = {
      username: '',
      email: '',
      password: '',
    };
    onSignUp(dummyUser);
  };
  return (
    <>
      <View>
        <View>
          <TextInput placeholder="Username" />
        </View>
        <View>
          <TextInput placeholder="Email" />
        </View>
        <View>
          <TextInput placeholder="Password" />
        </View>
        <View>
          <TouchableOpacity onPress={() => validateForm()}>
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignUpForm;
