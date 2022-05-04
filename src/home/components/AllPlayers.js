import React from 'react';
import {View} from '../../common';
import {connect} from 'react-redux';
import Player from './Players';

// REDUX
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
        ballColor="yellow"
      />

      <Player // GREEN
        name="circle"
        color="#3a8a47"
        size={playerSize}
        top={topPosition}
        right={20}
        lives={greenLives}
        ballColor="green"
      />

      <Player // BROWN
        name="circle"
        color="#8B4513"
        size={playerSize}
        top={middlePosition}
        left={20}
        lives={brownLives}
        ballColor="brown"
      />

      <Player // BLUE
        name="circle"
        color="#2b29c2"
        size={playerSize}
        top={middlePosition}
        right={20}
        lives={blueLives}
        ballColor="blue"
      />

      <Player // PINK
        name="circle"
        color="#c92080"
        size={playerSize}
        top={bottomPosition}
        left={20}
        lives={pinkLives}
        ballColor="pink"
      />

      <Player // BLACK
        name="circle"
        color="#000"
        size={playerSize}
        top={bottomPosition}
        right={20}
        lives={blackLives}
        ballColor="black"
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

export default connect(mapStateToProps, null)(AllPlayers);
