import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Title from './TextElement';

export interface FormButtonProps {
  buttonText: string;
  style?: any;
  onClick?: () => void;
  reverse?: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({
  buttonText,
  onClick,
  reverse,
}: FormButtonProps) => {
  let styles: any = style;
  if (reverse) {
    styles = style_re;
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Title text={buttonText} style={styles.buttonText} />
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
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

const style_re = StyleSheet.create({
  button: {
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
  buttonText: {
    height: 60,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#FAFCFC',
  },
});

export default FormButton;
