import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextElement from '../utils/TextElement';
import Hairline from './Hairline';

export interface TextHeaderProps {
  title: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({title}: TextHeaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <TextElement text={title} size={1} style={styles.textStyle} />
        <Hairline />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  textStyle: {
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default TextHeader;
