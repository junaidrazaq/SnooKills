import React from 'react';
import {Pressable} from '../../../common';
import {StyleSheet} from 'react-native';

const KillsBtn = ({ballColor}) => {
  // RENDER
  return (
    <Pressable
      onPress={() => console.log('test')}
      containerStyles={styles.kills}
    />
  );
};

// STYLES
const styles = StyleSheet.create({
  kills: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default KillsBtn;
