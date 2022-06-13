import React from 'react';
import {Text, View} from '../../common';
import Player from './Player';
import {Dimensions} from 'react-native';
import {shadowAround, shadowDark} from '../../_Shadow';
import VsSeperator from './VsSeperator';

const {height, width} = Dimensions.get('screen');

// ** ------
// ALL_PLAYERS_COMPONENT
// ------ **
const AllPlayers = () => {
  const topPosition = height * 0.02;
  const midPosition = height * 0.295;
  const bottomPosition = height * 0.57;

  //   RENDER
  return (
    <View paddingHorizontal={20} style={{flex: 1}}>
      <Player ballColor="yellow" color="#f2d54b" top={topPosition} left={20} />
      <Player ballColor="green" color="#3a8a47" top={topPosition} right={20} />
      <Player ballColor="brown" color="#8B4513" top={midPosition} left={20} />
      <Player ballColor="blue" color="#2b29c2" top={midPosition} right={20} />
      <Player ballColor="pink" color="#c92080" top={bottomPosition} left={20} />
      <Player ballColor="black" color="#000" top={bottomPosition} right={20} />
      <VsSeperator midPosition={midPosition} />
    </View>
  );
};

export default AllPlayers;
