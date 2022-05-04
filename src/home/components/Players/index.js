import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, Text, View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

const Player = ({
  name,
  size,
  color,
  top,
  left,
  right,
  lives,
  kills,
  onAdd,
  onMinus,
}) => {
  const position = {top: top, left: left, right: right};
  const killsShadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.4,
  };

  // RENDER
  return (
    <View style={[styles.container, position, kills && killsShadow]} center>
      {/* BALL */}
      <Icon name={name} size={size} color={color} />

      {/* LIVES */}
      <Text fontFamily="Rubik-Medium">Lives: {lives}</Text>

      {/* ADD/REMOVE LIVES */}
      <View horizontal style={{paddingTop: 10, width: '200%'}}>
        <Pressable onPress={onMinus}>
          <Icon name="minus" size={30} color="red" style={{left: 10}} />
        </Pressable>
        <Pressable onPress={onAdd}>
          <Icon name="plus" size={30} color="green" style={{left: 50}} />
        </Pressable>
      </View>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    ...shadowAround,
  },
});

export default Player;
