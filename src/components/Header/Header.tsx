import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextElement from '../utils/TextElement';
import Hairline from './Hairline';

export interface TextHeaderProps {
  title: string;
  subtitle?: string;
}

const TextHeader: React.FC<TextHeaderProps> = ({
  title,
  subtitle,
}: TextHeaderProps) => {
  if (subtitle) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <TextElement text={title} size={1} />
            <TextElement text={subtitle} size={2} numberOfLines={1} />
          </View>
          <Hairline style={styles.hairlineStyle} />
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <TextElement text={title} size={1} />
          </View>
          <Hairline style={styles.hairlineStyle} />
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 50,
  },
  hairlineStyle: {
    borderBottomWidth: 4,
  },
});

export default TextHeader;
