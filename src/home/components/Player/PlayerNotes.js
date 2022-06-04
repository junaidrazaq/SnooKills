import React from 'react';
import {View} from '../../../common';
import {StyleSheet} from 'react-native';
import {shadowAround} from '../../../_Shadow';
import Notes from './Notes';

const PlayerNotes = ({isNotesVisible, name, ballColor, onClose}) => {
  // RENDER
  return (
    isNotesVisible && (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Notes name={name} ballColor={ballColor} onClose={onClose} />
        </View>
      </View>
    )
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    bottom: 40,
  },
  modalContainer: {
    position: 'absolute',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    ...shadowAround,
  },
});

export default PlayerNotes;
