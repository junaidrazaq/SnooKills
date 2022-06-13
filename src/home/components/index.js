import React, {useEffect} from 'react';
import {HeaderWithBack, LoadingIndicator, View} from '../../common';
import AllPlayers from './AllPlayers';
import ResetLives from './ResetLives';
import {InteractionManager} from 'react-native';

const Home = () => {
  const containerStyle = {flex: 1};
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoading(false);
    });
  }, []);

  // RENDER
  return (
    <View style={containerStyle}>
      <HeaderWithBack text="Home" />
      {loading ? (
        <LoadingIndicator containerStyles={{bottom: 20}} />
      ) : (
        <>
          <AllPlayers />
          {/* <ResetLives /> */}
        </>
      )}
    </View>
  );
};

export default Home;
