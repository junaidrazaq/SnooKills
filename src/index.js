import React from 'react';
import {View} from './common';
import AppNavigation from './navigation';

const Root = () => {
  // RENDER
  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
};

export default Root;
