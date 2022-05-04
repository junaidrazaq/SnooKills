import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import CurrentLives from './Currentlives';
import KillsBtn from './KillsBtn';

const Player = ({
  name,
  size,
  color,
  top,
  left,
  right,
  lives,
  kills,
  ballColor,
}) => {
  // STYLES
  const position = {top: top, left: left, right: right};
  const bgColor = {backgroundColor: noLives ? '#aaa' : '#fff'};
  const killsShadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.4,
  };

  // CONDITIONALS
  const noLives = lives === 0 ? true : false;

  // RENDER
  return (
    <View
      center
      style={[styles.container, position, kills && killsShadow, bgColor]}>
      <Icon
        name={name}
        size={size}
        color={color}
        style={{opacity: noLives ? 0.3 : 1}}
      />

      <CurrentLives noLives={noLives} lives={lives} />

      <AddRemoveBtns lives={lives} ballColor={ballColor} />

      <KillsBtn ballColor={ballColor} />
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    ...shadowAround,
  },
});

export default Player;
