import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/MaterialIcons';
import {Pressable, Text} from '../../../common';
import {StyleSheet} from 'react-native';

// REDUX
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';

const HeaderButtons = ({
  noLives,
  color,
  ballColor,
  onNotesPress,
  updatePlayer,
  kills,
  onPress,
}) => {
  // FN: Toggle Kills and add note
  const _handleKills = async () => {
    if (!kills) {
      await onPress();
      await updatePlayer({type: `${ballColor}Kills`, kills: true});
    }
    if (kills) {
      updatePlayer({type: `${ballColor}Kills`, kills: !kills});
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

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(HeaderButtons);
