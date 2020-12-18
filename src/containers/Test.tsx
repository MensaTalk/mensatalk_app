import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Svg from 'react-native-svg';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigation';
type Props = StackScreenProps<RootStackParamList, 'Test'>;

const renderItem = () => (
  <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.ellipse3Row}>
        <Svg viewBox="0 0 59.57 59.57" style={styles.ellipse3}>
          <Image
            style={{width: 59.57, height: 59.57, borderRadius: 100}}
            source={require('../assets/images/gradient.png')}
          />
        </Svg>
        <View style={styles.rect} />
        <Svg viewBox="0 0 59.57 59.57" style={styles.ellipse7}>
          <Image
            style={{width: 59.57, height: 59.57, borderRadius: 100}}
            source={require('../assets/images/gradient.png')}
          />
        </Svg>
      </View>
      <Svg viewBox="0 0 59.57 59.57" style={styles.ellipse8}>
        <Image
          style={{width: 59.57, height: 59.57, borderRadius: 100}}
          source={require('../assets/images/gradient.png')}
        />
      </Svg>
      <Svg viewBox="0 0 59.57 59.57" style={styles.ellipse4}>
        <Image
          style={{width: 59.57, height: 59.57, borderRadius: 100}}
          source={require('../assets/images/gradient.png')}
        />
      </Svg>
    </View>
  </TouchableOpacity>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Test: React.FC<Props> = ({route, navigation}: Props) => {
  const DATA = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 267,
    height: 252,
  },
  ellipse3: {
    width: 60,
    height: 60,
    marginTop: 33,
  },
  rect: {
    width: 144,
    height: 127,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 5,
    borderColor: 'rgba(67,169,183,1)',
    marginLeft: 1,
  },
  ellipse7: {
    width: 60,
    height: 60,
    marginLeft: 2,
    marginTop: 36,
  },
  ellipse3Row: {
    height: 127,
    flexDirection: 'row',
    marginTop: 63,
  },
  ellipse8: {
    width: 60,
    height: 60,
    marginTop: -190,
    marginLeft: 103,
  },
  ellipse4: {
    width: 60,
    height: 60,
    marginTop: 132,
    marginLeft: 103,
  },
});
/*        <View style={styles.user} />
        <View style={styles.user} />

        <View style={styles.table} />
        <View style={styles.user} />
        <View style={styles.user} />*/
/*const styles = StyleSheet.create({
  container: {},
  table: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 5,
    borderColor: 'rgba(67,169,183,1)',
    width: 144,
    height: 127,
  },
  user: {
    backgroundColor: 'rgba(67,169,183,1)',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});*/
export default Test;
