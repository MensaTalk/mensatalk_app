import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export interface FormInputProps {
  placeholderText: string;
  style?: any;
  secure?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholderText,
  style,
  secure,
}: FormInputProps) => {
  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#5CBACB'}
          secureTextEntry={secure === true}
          style={[styles.textInput, style]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 10,
    backgroundColor: '#FAFCFC',

    borderWidth: 2,
    borderColor: '#5CBACB',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textInput: {
    height: 60,
    textAlign: 'center',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: 'white',
  },
});

export default FormInput;
