import React from 'react';
import {View} from '../../common';
import {connect} from 'react-redux';
import Player from './Player';

// REDUX
import {
  getBlackKills,
  getBlackLives,
  getBlueKills,
  getBlueLives,
  getBrownKills,
  getBrownLives,
  getGreenKills,
  getGreenLives,
  getPinkKills,
  getPinkLives,
  getYellowKills,
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
  yellowKills,
  greenKills,
  brownKills,
  blueKills,
  pinkKills,
  blackKills,
}) => {
  const topPosition = 20;
  const middlePosition = 250;
  const bottomPosition = 480;

  //   RENDER
  return (
    <View paddingHorizontal={20} center>
      <Player // YELLOW
        color="#f2d54b"
        top={topPosition}
        left={20}
        lives={yellowLives}
        ballColor="yellow"
        kills={yellowKills}
      />

      <Player // GREEN
        color="#3a8a47"
        top={topPosition}
        right={20}
        lives={greenLives}
        ballColor="green"
        kills={greenKills}
      />

      <Player // BROWN
        color="#8B4513"
        top={middlePosition}
        left={20}
        lives={brownLives}
        ballColor="brown"
        kills={brownKills}
      />

      <Player // BLUE
        color="#2b29c2"
        top={middlePosition}
        right={20}
        lives={blueLives}
        ballColor="blue"
        kills={blueKills}
      />

      <Player // PINK
        color="#c92080"
        top={bottomPosition}
        left={20}
        lives={pinkLives}
        ballColor="pink"
        kills={pinkKills}
      />

      <Player // BLACK
        color="#000"
        top={bottomPosition}
        right={20}
        lives={blackLives}
        ballColor="black"
        kills={blackKills}
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
    yellowKills: getYellowKills(state),
    greenKills: getGreenKills(state),
    brownKills: getBrownKills(state),
    blueKills: getBlueKills(state),
    pinkKills: getPinkKills(state),
    blackKills: getBlackKills(state),
  };
};

export default connect(mapStateToProps, null)(AllPlayers);
