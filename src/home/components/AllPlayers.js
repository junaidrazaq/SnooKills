import React from 'react';
import {View} from '../../common';
import Player from './Player';
import {Dimensions} from 'react-native';

// REDUX
import {connect} from 'react-redux';
import {
  getBlackPlayer,
  getBluePlayer,
  getBrownPlayer,
  getGreenPlayer,
  getPinkPlayer,
  getYellowPlayer,
} from '../redux/selectors';

const {height} = Dimensions.get('screen');

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
  const topPosition = height * 0.03;
  const middlePosition = height * 0.3;
  const bottomPosition = height * 0.57;

  //   RENDER
  return (
    <View paddingHorizontal={20} style={{flex: 1}}>
      <Player // YELLOW
        color="#f2d54b"
        top={topPosition}
        left={20}
        lives={yellowPlayer.lives}
        ballColor="yellow"
        kills={yellowPlayer.kills}
        name={yellowPlayer.name}
        notes={yellowPlayer.notes}
      />

      <Player // GREEN
        color="#3a8a47"
        top={topPosition}
        right={20}
        lives={greenPlayer.lives}
        ballColor="green"
        kills={greenPlayer.kills}
        name={greenPlayer.name}
        notes={greenPlayer.notes}
      />

      <Player // BROWN
        color="#8B4513"
        top={middlePosition}
        left={20}
        lives={brownPlayer.lives}
        ballColor="brown"
        kills={brownPlayer.kills}
        name={brownPlayer.name}
        notes={brownPlayer.notes}
      />

      <Player // BLUE
        color="#2b29c2"
        top={middlePosition}
        right={20}
        lives={bluePlayer.lives}
        ballColor="blue"
        kills={bluePlayer.kills}
        name={bluePlayer.name}
        notes={bluePlayer.notes}
      />

      <Player // PINK
        color="#c92080"
        top={bottomPosition}
        left={20}
        lives={pinkPlayer.lives}
        ballColor="pink"
        kills={pinkPlayer.kills}
        name={pinkPlayer.name}
        notes={pinkPlayer.notes}
      />

      <Player // BLACK
        color="#000"
        top={bottomPosition}
        right={20}
        lives={blackPlayer.lives}
        ballColor="black"
        kills={blackPlayer.kills}
        name={blackPlayer.name}
        notes={blackPlayer.notes}
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
