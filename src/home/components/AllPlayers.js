import React from 'react';
import {View} from '../../common';
import {connect} from 'react-redux';
import Player from './Player';

// REDUX
import {
  getBlackPlayer,
  getBluePlayer,
  getBrownPlayer,
  getGreenPlayer,
  getPinkPlayer,
  getYellowPlayer,
} from '../redux/selectors';

// ** ------
// ALL_PLAYERS_COMPONENT
// ------ **
const AllPlayers = ({
  yellowPlayer,
  greenPlayer,
  brownPlayer,
  bluePlayer,
  pinkPlayer,
  blackPlayer,
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
        lives={yellowPlayer.lives}
        ballColor="yellow"
        kills={yellowPlayer.kills}
      />

      <Player // GREEN
        color="#3a8a47"
        top={topPosition}
        right={20}
        lives={greenPlayer.lives}
        ballColor="green"
        kills={greenPlayer.kills}
      />

      <Player // BROWN
        color="#8B4513"
        top={middlePosition}
        left={20}
        lives={brownPlayer.lives}
        ballColor="brown"
        kills={brownPlayer.kills}
      />

      <Player // BLUE
        color="#2b29c2"
        top={middlePosition}
        right={20}
        lives={bluePlayer.lives}
        ballColor="blue"
        kills={bluePlayer.kills}
      />

      <Player // PINK
        color="#c92080"
        top={bottomPosition}
        left={20}
        lives={pinkPlayer.lives}
        ballColor="pink"
        kills={pinkPlayer.kills}
      />

      <Player // BLACK
        color="#000"
        top={bottomPosition}
        right={20}
        lives={blackPlayer.lives}
        ballColor="black"
        kills={blackPlayer.kills}
      />
    </View>
  );
};

// STATE
const mapStateToProps = state => {
  return {
    yellowPlayer: getYellowPlayer(state),
    greenPlayer: getGreenPlayer(state),
    brownPlayer: getBrownPlayer(state),
    bluePlayer: getBluePlayer(state),
    pinkPlayer: getPinkPlayer(state),
    blackPlayer: getBlackPlayer(state),
  };
};

export default connect(mapStateToProps, null)(AllPlayers);
