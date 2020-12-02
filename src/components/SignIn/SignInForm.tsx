import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

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
      <View>
        <View>
          <TextInput placeholder="Username" />
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
      <View>
        <TouchableOpacity onPress={() => onRedirectSignUp()}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignInForm;
