import React from 'react';
import {View} from './common';
import Intro from './intro/RootIntro';

const Root = () => {
  // RENDER
  return (
    <View style={{flex: 1}}>
      <Intro />
    </View>
  );
};

export default Root;
