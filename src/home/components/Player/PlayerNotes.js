import React from 'react';
import {Pressable, Text, View} from '../../../common';
import {StyleSheet} from 'react-native';
import {shadowAround} from '../../../_Shadow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlayerNotes = ({isNotesVisible, name, ballColor, onClose}) => {
  // RENDER
  return (
    isNotesVisible && (
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text
            style={{textTransform: 'capitalize'}}
            fontSize={18}
            fontFamily="Rubik-Bold">
            {name ? name : ballColor} Notes
          </Text>
          <Pressable onPress={() => onClose()} containerStyles={styles.close}>
            <Icon name="close-circle" size={22} color="red" />
          </Pressable>
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
  close: {
    position: 'absolute',
    top: -7,
    right: -7,
    zIndex: 999,
  },
});

export default PlayerNotes;
