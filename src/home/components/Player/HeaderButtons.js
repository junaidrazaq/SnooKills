import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from '../../../common';
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
}) => {
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
        onPress={() => updatePlayer({type: `${ballColor}Kills`})}
        containerStyles={styles.kills}>
        <Icon name="plus" size={17} color="#fff" />
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
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(HeaderButtons);
