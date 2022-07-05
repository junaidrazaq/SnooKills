import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

// COMPONENTS
import AddRemoveBtns from './AddRemoveBtns';
import PlayerName from './PlayerName';
import PlayerNotes from './PlayerNotes';
import HeaderButtons from './HeaderButtons';
import AddNoteForm from './AddNoteForm';
import BallsPotted from './BallsPotted';

// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {
  addLife,
  changeKills,
  minusLife,
  selectBallByColor,
} from '../../redux/homeSlice';

const Player = ({color, top, left, right, ballColor}) => {
  // Local_State
  const [isNotesVisible, setIsNotesVisible] = React.useState(false);
  const [gainedLifeNote, setGainedLifeNote] = React.useState(false);
  const [lostLifeNote, setLostLifeNote] = React.useState(false);
  const [onKillsNotes, setShowKillsNotes] = React.useState(false);

  // Redux_State
  const {lives, notes, kills, name} = useSelector(state =>
    selectBallByColor(state, ballColor),
  );
  const dispatch = useDispatch();
  const noLives = lives === 0 ? true : false;
  const livesColor = kills
    ? 'red'
    : lives === 3
    ? '#228c22'
    : lives < 3 && lives > 0
    ? 'coral'
    : '#999';

  // Styles
  const position = {top: top, left: left, right: right};
  const bgColor = {backgroundColor: noLives ? '#aaa' : '#333'};
  const shadowColor = {
    shadowColor: livesColor,
    borderWidth: 0.5,
    borderColor: livesColor,
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
      <View center style={[styles.container, position, bgColor, shadowColor]}>
        <PlayerName name={name} ballColor={ballColor} />

        <HeaderButtons
          noLives={noLives}
          color={color}
          onNotesPress={_onNotes}
          ballColor={ballColor}
          kills={kills}
          onPress={() => setShowKillsNotes(true)}
        />

        <AddRemoveBtns
          _onAdd={_onAdd}
          _onMinus={_onMinus}
          noLives={noLives}
          lives={lives}
        />

        <BallsPotted ballType="Reds" ballColor={ballColor} />

        <BallsPotted ballType="Colors" ballColor={ballColor} />
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
          lostLife
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
    shadowRadius: 19,
    shadowOpacity: 0.9,
    elevation: 12,
  },
});

export default Player;
