import React from 'react';
import IconButton from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from '../../../common';
import {StyleSheet} from 'react-native';

const PlayerNotes = () => {
  // RENDER
  return (
    <Pressable containerStyles={styles.container}>
      <IconButton name="speaker-notes" size={25} color="green" />
    </Pressable>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    left: -10,
  },
});

export default PlayerNotes;
