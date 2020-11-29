import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface HeaderProps {
  title: string;
}

const TextHeader: React.FC<HeaderProps> = ({title}: HeaderProps) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.header}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 10,
  },
  header: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#373F51',
  },
});

export default TextHeader;
