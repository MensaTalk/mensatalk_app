import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface TextElementProps {
  text: string;
  size?: number;
  style?: any;
  numberOfLines?: number;
}

const Title: React.FC<TextElementProps> = ({
  text,
  style,
  size,
  numberOfLines,
}: TextElementProps) => {
  let textStyle: {};
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
    case 4: {
      textStyle = styles.text4;
      break;
    }
    case 5: {
      textStyle = styles.text5;
      break;
    }
    default: {
      textStyle = styles.text4;
      break;
    }
  }
  return (
    <>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={'tail'}
        style={[textStyle, style]}>
        {text}
      </Text>
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
    color: '#5CBACB',
  },
  text2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 26,
    color: '#5CBACB',
  },
  text3: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    color: '#5CBACB',
  },
  text4: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FAFCFC',
  },
  text5: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FAFCFC',
  },
});

export default Title;
