import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerLives from './PlayerLives';
import PlayerName from './PlayerName';
import PlayerNotes from './PlayerNotes';
import HeaderButtons from './HeaderButtons';
import AddNoteForm from './AddNoteForm';

// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {
  addLife,
  changeKills,
  minusLife,
  selectBallByColor,
} from '../../redux/homeSlice';
import BallsPotted from './BallsPotted';

const Player = ({color, top, left, right, ballColor}) => {
  // Local_State
  const [isNotesVisible, setIsNotesVisible] = React.useState(false);
  const [gainedLifeNote, setGainedLifeNote] = React.useState(false);
  const [lostLifeNote, setLostLifeNote] = React.useState(false);
  const [onKillsNotes, setShowKillsNotes] = React.useState(false);

  // Redux_State
  const ball = useSelector(state => selectBallByColor(state, ballColor));
  const {lives, notes, kills, name} = ball;
  const dispatch = useDispatch();
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
      dispatch(changeKills({player: ballColor, val: true}));
      setGainedLifeNote(true);
    }
    lives >= 5 && alert('implement_shake_animation');
  }, [ballColor, lives]);

  // FN: Remove one life
  const _onMinus = useCallback(() => {
    if (lives > 0) {
      dispatch(minusLife({player: ballColor}));
      dispatch(changeKills({player: ballColor, val: false}));
      setLostLifeNote(true);
    }
    lives <= 0 && alert('implement_shake_animation');
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
          kills={kills}
          onPress={() => setShowKillsNotes(true)}
        />

        <PlayerLives noLives={noLives} lives={lives} />

        <AddRemoveBtns _onAdd={_onAdd} _onMinus={_onMinus} />

        <BallsPotted ballType="Colors" />

        <BallsPotted ballType="Reds" />
      </View>

      <PlayerNotes // Player Notes Modal
        name={name}
        ballColor={ballColor}
        isNotesVisible={isNotesVisible}
        notes={notes}
        onClose={_onClose}
      />

      {gainedLifeNote && ( // Gained Life Notes \\
        <AddNoteForm
          name={name}
          ballColor={ballColor}
          lives={lives}
          onClose={() => setGainedLifeNote(false)}
          kills={kills}
          gainedLife
        />
      )}

      {onKillsNotes && ( // Kills Notes \\
        <AddNoteForm
          name={name}
          ballColor={ballColor}
          lives={lives}
          onClose={() => setShowKillsNotes(false)}
          onKillsNotes
        />
      )}

      {lostLifeNote && ( // Lost Life Notes \\
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
