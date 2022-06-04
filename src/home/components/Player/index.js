import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerLives from './PlayerLives';
import PlayerKills from './PlayerKills';
import PlayerName from './PlayerName';
import PlayerNotes from './PlayerNotes';
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';

const Player = ({
  color,
  top,
  left,
  right,
  lives,
  kills,
  ballColor,
  name,
  updatePlayer,
}) => {
  // State
  const noLives = lives === 0 ? true : false;

  // Styles
  const position = {top: top, left: left, right: right};
  const bgColor = {backgroundColor: noLives ? '#aaa' : '#fff'};
  const killsShadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 10,
  };

  // FN: Add one life
  const _onAdd = useCallback(() => {
    lives >= 5
      ? alert('implement_shake_animation')
      : updatePlayer({type: `${ballColor}LivesAdd`});
  }, [ballColor, lives]);

  // FN: Remove one life
  const _onMinus = useCallback(() => {
    lives <= 0
      ? alert('implement_shake_animation')
      : updatePlayer({type: `${ballColor}LivesMinus`});
  }, [ballColor, lives]);

  // ------ || ------ \\
  // RENDER || RENDER \\
  return (
    <View
      center
      style={[styles.container, position, kills && killsShadow, bgColor]}>
      <PlayerName name={name} ballColor={ballColor} />

      <Icon
        name={'circle'}
        size={60}
        color={color}
        style={{opacity: noLives ? 0.3 : 1}}
      />

      <PlayerLives noLives={noLives} lives={lives} />

      <AddRemoveBtns _onAdd={_onAdd} _onMinus={_onMinus} />

      <PlayerKills ballColor={ballColor} />

      <PlayerNotes />
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
});

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(React.memo(Player));
