import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface HairlineProps {
  style?: any;
}

const Hairline: React.FC<HairlineProps> = ({style}: HairlineProps) => {
  return (
    <>
      <View style={[styles.hairline, style]} />
    </>
  );
};

const styles = StyleSheet.create({
  hairline: {
    borderBottomColor: '#E5E5EA',
    borderBottomWidth: 1.5,
  },
});

export default Hairline;
