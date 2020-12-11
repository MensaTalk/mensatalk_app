import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import FormButton from '../utils/FormButton';
import Title from '../utils/TextElement';
import Logo from '../utils/Logo';

export interface StartupFormProps {
  onSignUp: () => void;
  onSignIn: () => void;
}

const StartForm: React.FC<StartupFormProps> = ({
  onSignUp,
  onSignIn,
}: StartupFormProps) => {
  return (
    <>
      <View style={styles.container}>
        <Logo />
        <View style={styles.form}>
          <FormButton buttonText={'Create Account'} onClick={onSignUp} reverse={true} />
        </View>
        <View style={styles.form}>
          <FormButton buttonText={'Login'} onClick={onSignIn} />
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
});

export default StartForm;
