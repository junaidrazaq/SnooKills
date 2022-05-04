import React from 'react';
import {View} from '../../common';
import {connect} from 'react-redux';
import Player from './Players';

// REDUX
import {
  addLife as addLifeAction,
  minusLife as minusLifeAction,
} from '../redux/actions';
import {
  getBlackLives,
  getBlueLives,
  getBrownLives,
  getGreenLives,
  getPinkLives,
  getYelowLives,
} from '../redux/selectors';

// ** ------
// ALL_PLAYERS_COMPONENT
// ------ **
const AllPlayers = ({
  yellowLives,
  greenLives,
  brownLives,
  blueLives,
  pinkLives,
  blackLives,
  addLife,
  minusLife,
}) => {
  const playerSize = 60;
  const topPosition = 20;
  const middlePosition = 250;
  const bottomPosition = 480;

  //   RENDER
  return (
    <View paddingHorizontal={20} center>
      <Player // YELLOW
        name="circle"
        color="#f2d54b"
        size={playerSize}
        top={topPosition}
        left={20}
        lives={yellowLives}
        onAdd={() => addLife('yellow')}
        onMinus={() => minusLife('yellow')}
      />

      <Player // GREEN
        name="circle"
        color="#3a8a47"
        size={playerSize}
        top={topPosition}
        right={20}
        lives={greenLives}
        onAdd={() => addLife('green')}
        onMinus={() => minusLife('green')}
      />

      <Player // BROWN
        name="circle"
        color="#8B4513"
        size={playerSize}
        top={middlePosition}
        left={20}
        lives={brownLives}
        onAdd={() => addLife('brown')}
        onMinus={() => minusLife('brown')}
      />

      <Player // BLUE
        name="circle"
        color="#2b29c2"
        size={playerSize}
        top={middlePosition}
        right={20}
        lives={blueLives}
        onAdd={() => addLife('blue')}
        onMinus={() => minusLife('blue')}
      />

      <Player // PINK
        name="circle"
        color="#c92080"
        size={playerSize}
        top={bottomPosition}
        left={20}
        lives={pinkLives}
        onAdd={() => addLife('pink')}
        onMinus={() => minusLife('pink')}
      />

      <Player // BLACK
        name="circle"
        color="#000"
        size={playerSize}
        top={bottomPosition}
        right={20}
        lives={blackLives}
        onAdd={() => addLife('black')}
        onMinus={() => minusLife('black')}
      />
    </View>
  );
};

// STATE
const mapStateToProps = state => {
  return {
    yellowLives: getYelowLives(state),
    greenLives: getGreenLives(state),
    brownLives: getBrownLives(state),
    blueLives: getBlueLives(state),
    pinkLives: getPinkLives(state),
    blackLives: getBlackLives(state),
  };
};

// actions
const mapDispatchToProps = {addLife: addLifeAction, minusLife: minusLifeAction};

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);
