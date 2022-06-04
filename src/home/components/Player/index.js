import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import CurrentLives from './Currentlives';
import KillsBtn from './KillsBtn';

const Player = ({color, top, left, right, lives, kills, ballColor}) => {
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
      <Icon
        name={'circle'}
        size={60}
        color={color}
        style={{opacity: noLives ? 0.3 : 1}}
      />
      {/* <Text
        fontFamily="Rubik-Bold"
        fontSize={14}
        color={color}
        style={[styles.name]}
        align="center">
        Junaid Razaq
      </Text> */}
      {/* <TextInput style={[styles.name]} placeholder="Enter Name" /> */}

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
  name: {
    position: 'absolute',
    width: '200%',
    bottom: -25,
    textAlign: 'center',
    maxWidth: '100%',
  },
});

export default React.memo(Player);
