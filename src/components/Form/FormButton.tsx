import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Title from '../utils/TextElement';

export interface FormButtonProps {
  buttonText: string;
  style?: any;
  onClick?: () => void;
  isDark?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  buttonText,
  onClick,
}: FormButtonProps) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Title text={buttonText} style={styles.buttonText} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FAFCFC',
    borderColor: '#5CBACB',
    borderWidth: 2,
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
  buttonText: {
    height: 60,
    textAlignVertical: 'center',
    textAlign: 'center',

    color: '#5CBACB',
  },
});

export default FormButton;
