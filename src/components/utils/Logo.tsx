import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>mensatalk</Text>
        <View style={styles.rect} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 165,

    alignSelf: 'center',
  },
  text: {
    color: '#5CBACB',
    fontSize: 52,
    textAlign: 'left',
  },
  rect: {
    height: 20,
    backgroundColor: '#5CBACB',
    marginBottom: 60,
  },
});

export default Logo;
