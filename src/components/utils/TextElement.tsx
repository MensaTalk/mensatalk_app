import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface TextElementProps {
  text: string;
  size?: number;
  style?: any;
}

const Title: React.FC<TextElementProps> = ({
  text,
  style,
  size,
}: TextElementProps) => {
  var textStyle: {};
  switch (size) {
    case 1: {
      textStyle = styles.text1;
      break;
    }
    case 2: {
      textStyle = styles.text2;
      break;
    }
    case 3: {
      textStyle = styles.text3;
      break;
    }
    default: {
      textStyle = styles.text4;
      break;
    }
  }
  return (
    <>
      <Text style={[textStyle, style]}>{text}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#373F51',
  },
  text2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 26,
    color: '#373F51',
  },
  text3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: '#657291',
  },
  text4: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#F5F5F5',
  },
});

export default Title;
