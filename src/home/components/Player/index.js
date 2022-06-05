import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerLives from './PlayerLives';
import PlayerName from './PlayerName';
import PlayerNotes from './PlayerNotes';
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';
import HeaderButtons from './HeaderButtons';

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
  notes,
}) => {
  // State
  const [isNotesVisible, setIsNotesVisible] = React.useState(false);
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
    if (lives < 5) {
      updatePlayer({type: `${ballColor}LivesAdd`});
      // setIsNotesVisible(true);
    }
    lives >= 5 && alert('implement_shake_animation');
  }, [ballColor, lives]);

  // FN: Remove one life
  const _onMinus = useCallback(() => {
    lives <= 0
      ? alert('implement_shake_animation')
      : updatePlayer({type: `${ballColor}LivesMinus`});
  }, [ballColor, lives]);

  // FN: Show/Hide notes
  const _onNotes = useCallback(() => {
    setIsNotesVisible(prev => !prev);
  }, [isNotesVisible]);

  // FN: Close notes
  const _onClose = useCallback(() => {
    setIsNotesVisible(false);
  }, [isNotesVisible]);

  // ------ || ------ \\
  // RENDER || RENDER \\
  return (
    <>
      <View
        center
        style={[styles.container, position, kills && killsShadow, bgColor]}>
        <PlayerName name={name} ballColor={ballColor} />

        <HeaderButtons
          noLives={noLives}
          color={color}
          onNotesPress={_onNotes}
          ballColor={ballColor}
        />

        <PlayerLives noLives={noLives} lives={lives} />

        <AddRemoveBtns _onAdd={_onAdd} _onMinus={_onMinus} />
      </View>

      <PlayerNotes
        name={name}
        ballColor={ballColor}
        isNotesVisible={isNotesVisible}
        notes={notes}
        onClose={_onClose}
      />
    </>
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
