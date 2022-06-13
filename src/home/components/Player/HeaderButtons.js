import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/MaterialIcons';
import {Pressable, Text} from '../../../common';
import {StyleSheet} from 'react-native';

// REDUX
import {useDispatch} from 'react-redux';
import {toggleKills} from '../../redux/homeSlice';

const HeaderButtons = ({
  noLives,
  color,
  ballColor,
  onNotesPress,
  kills,
  onPress,
}) => {
  const dispatch = useDispatch();

  // FN: Toggle Kills and add note
  const _handleKills = async () => {
    if (!kills) {
      await onPress();
    }
    if (kills) {
      dispatch(toggleKills({player: ballColor}));
    }
  };

  // RENDER
  return (
    <>
      <Icon
        name={'circle'}
        size={60}
        color={color}
        style={{opacity: noLives ? 0.3 : 1}}
      />
      <Pressable
        onPress={() => onNotesPress()}
        containerStyles={styles.container}>
        <IconButton name="speaker-notes" size={25} color="green" />
      </Pressable>
      <Pressable
        onPress={_handleKills}
        containerStyles={[
          styles.kills,
          {backgroundColor: kills ? '#ed5740' : '#aaa'},
        ]}>
        <Text fontFamily="Rubik-Medium" color="#fff">
          Kills
        </Text>
      </Pressable>
    </>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    left: -10,
    zIndex: 999,
  },
  kills: {
    position: 'absolute',
    top: -10,
    right: -10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HeaderButtons;
