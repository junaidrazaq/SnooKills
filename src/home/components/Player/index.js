import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerLives from './PlayerLives';
import PlayerName from './PlayerName';
import PlayerNotes from './PlayerNotes';
import HeaderButtons from './HeaderButtons';
import AddNoteForm from './AddNoteForm';
import {useDispatch, useSelector} from 'react-redux';
import {
  addLife,
  minusLife,
  selectAllBalls,
  selectBallByColor,
} from '../../redux/homeSlice';

const Player = ({color, top, left, right, ballColor}) => {
  // State
  const ball = useSelector(state => selectBallByColor(state, ballColor));
  const {lives, notes, kills, name} = ball;
  const dispatch = useDispatch();

  const [isNotesVisible, setIsNotesVisible] = React.useState(false);
  const [gainedLifeNote, setGainedLifeNote] = React.useState(false);
  const [lostLifeNote, setLostLifeNote] = React.useState(false);
  const [onKillsNotes, setShowKillsNotes] = React.useState(false);
  const noLives = lives === 0 ? true : false;

  // Styles
  const position = {top: top, left: left, right: right};
  const bgColor = {backgroundColor: noLives ? '#aaa' : '#f2f2f2'};
  const killsShadow = {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 10,
  };

  // FN: Add one life
  const _onAdd = useCallback(() => {
    if (lives < 5) {
      dispatch(addLife({player: ballColor}));
      setGainedLifeNote(true);
    }
    lives >= 5 && alert('implement_shake_animation');
  }, [ballColor, lives]);

  // FN: Remove one life
  const _onMinus = useCallback(() => {
    if (lives > 0) {
      dispatch(minusLife({player: ballColor}));
      setLostLifeNote(true);
    }
    lives <= 0 && alert('implement_shake_animation');
  }, [ballColor, lives]);

  // FN: Show/Hide notes
  const _onNotes = useCallback(() => {
    setIsNotesVisible(prev => !prev);
  }, [isNotesVisible]);
  console.count('Player');

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
          kills={kills}
          onPress={() => setShowKillsNotes(true)}
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

      {gainedLifeNote && (
        <AddNoteForm
          name={name}
          ballColor={ballColor}
          lives={lives}
          onClose={() => setGainedLifeNote(false)}
          gainedLife
        />
      )}

      {onKillsNotes && (
        <AddNoteForm
          name={name}
          ballColor={ballColor}
          lives={lives}
          onClose={() => setShowKillsNotes(false)}
          onKillsNotes
        />
      )}

      {lostLifeNote && (
        <AddNoteForm
          name={name}
          ballColor={ballColor}
          lives={lives}
          onClose={() => setLostLifeNote(false)}
        />
      )}
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

export default Player;
