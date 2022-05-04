import React from 'react';
import {HeaderWithBack, View} from '../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AllPlayers from './AllPlayers';

const Home = () => {
  const insets = useSafeAreaInsets();
  const containerStyle = {flex: 1, top: insets.top + 20};

  // RENDER
  return (
    <View style={containerStyle}>
      <HeaderWithBack text="Home" />
      <AllPlayers />
    </View>
  );
};

export default Home;
