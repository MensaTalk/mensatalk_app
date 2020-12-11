import React from 'react';
import {ActivityIndicator, Modal, View, StyleSheet} from 'react-native';

export interface LoadingProps {
  isVisible: boolean;
}

const Loading: React.FC<LoadingProps> = ({isVisible}: LoadingProps) => {
  return (
    <>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.container}>
          {/*<View style={styles.animationContainer}>*/}
          <ActivityIndicator size="large" color="#00DDFF" />
          {/*  <Title text={text} style={{color: '#5CBACB'}} />*/}
          {/*</View>*/}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0,0, 0.1)',
  },
  animationContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default Loading;
