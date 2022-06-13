import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../../common';

const VsSeperator = ({midPosition}) => {
  // ------ || ------ \\
  // RENDER || RENDER \\
  return (
    <>
      <View style={styles.verticalLine}></View>
      <View style={[styles.container, {top: midPosition + 70}]}>
        <Text fontFamily="IndieFlower-Regular" fontSize={25} color="#fff">
          VS
        </Text>
      </View>
    </>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 80,
    transform: [{rotate: '-15deg'}],
    elevation: 10,
  },
  verticalLine: {
    height: '105%',
    width: 7,
    backgroundColor: '#333',
    position: 'absolute',
    top: -52,
    zIndex: -1,
    alignSelf: 'center',
  },
});

export default VsSeperator;
