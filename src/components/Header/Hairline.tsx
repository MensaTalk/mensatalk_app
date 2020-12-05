import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface HairlineProps {}

const Hairline: React.FC<HairlineProps> = ({}: HairlineProps) => {
  return (
    <>
      <View style={styles.hairline} />
    </>
  );
};

const styles = StyleSheet.create({
  hairline: {
    borderBottomColor: '#5CBACB',
    borderBottomWidth: 1.5,
  },
});

export default Hairline;
