import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from './common';
import Counter from './count/components/Counter';

const Root = () => {
  const insets = useSafeAreaInsets();

  // RENDER
  return (
    <View style={{flex: 1, top: insets.top}}>
      <Counter />
    </View>
  );
};

export default Root;
