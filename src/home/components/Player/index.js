import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerLives from './PlayerLives';
import KillsBtn from './KillsBtn';
import PlayerName from './PlayerName';

const Player = ({color, top, left, right, lives, kills, ballColor, name}) => {
  // STYLES
  const position = {top: top, left: left, right: right};
  const bgColor = {backgroundColor: noLives ? '#aaa' : '#fff'};
  const killsShadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 10,
  };

  // CONDITIONALS
  const noLives = lives === 0 ? true : false;

  // RENDER
  return (
    <View
      center
      style={[styles.container, position, kills && killsShadow, bgColor]}>
      <PlayerName name={name} />

      <Icon
        name={'circle'}
        size={60}
        color={color}
        style={{opacity: noLives ? 0.3 : 1}}
      />

      <PlayerLives noLives={noLives} lives={lives} />

      <AddRemoveBtns lives={lives} ballColor={ballColor} />

      <KillsBtn ballColor={ballColor} />
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    ...shadowAround,
    width: '42%',
  },
  name: {
    position: 'absolute',
    width: '200%',
    bottom: -25,
    textAlign: 'center',
    maxWidth: '100%',
  },
});

export default React.memo(Player);
