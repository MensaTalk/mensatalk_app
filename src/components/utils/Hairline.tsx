import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface Hairline {}

const Hairline: React.FC<Hairline> = ({}: Hairline) => {
  return (
    <>
      <View style={styles.hairline} />
    </>
  );
};

const styles = StyleSheet.create({
  hairline: {
    borderBottomColor: '#373F51',
    borderBottomWidth: 1.5,
  },
});

export default Hairline;
