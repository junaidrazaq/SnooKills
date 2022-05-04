import React from 'react';
import {HeaderWithBack, View} from '../../common';
import AllPlayers from './AllPlayers';
import ResetLives from './ResetLives';

const Home = () => {
  const containerStyle = {flex: 1};

  // RENDER
  return (
    <View style={containerStyle}>
      <HeaderWithBack text="Home" />
      <AllPlayers />
      <ResetLives />
    </View>
  );
};

export default Home;
