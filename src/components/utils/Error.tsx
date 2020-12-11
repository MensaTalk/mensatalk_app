import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './TextElement';

export interface ErrorProps {
  errorMessage: string | undefined;
}

const Error: React.FC<ErrorProps> = ({errorMessage}: ErrorProps) => {
  if (errorMessage !== undefined) {
    return (
      <>
        <View style={styles.textInputContainer}>
          <Title
            text={errorMessage ? errorMessage : ''}
            style={styles.textInput}
          />
        </View>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 10,
    backgroundColor: '#FAFCFC',

    borderWidth: 2,
    borderColor: '#cb5c5c',

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
    marginVertical: 5,

    textAlign: 'center',
    textAlignVertical: 'center',

    color: '#cb5c5c',
  },
});

export default Error;
