import React from 'react';
import {Pressable, Text} from '../../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

const Heading = ({name, ballColor, onClose}) => {
  return (
    <>
      <Text
        style={{textTransform: 'capitalize'}}
        fontSize={18}
        fontFamily="Rubik-Bold">
        {name ? name : ballColor} Notes
      </Text>
      <Pressable onPress={() => onClose()} containerStyles={styles.close}>
        <Icon name="close-circle" size={22} color="red" />
      </Pressable>
    </>
  );
};

// STYLES
const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: -7,
    right: -7,
    zIndex: 999,
  },
});

export default Heading;
