import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, View} from '../common';

// COMPONENTS
import Header from './Header';

const Intro = () => {
  const insets = useSafeAreaInsets();

  // STYLES
  const _btnStyle = {
    bottom: insets.bottom + 20,
    position: 'absolute',
  };

  // RENDER
  return (
    <View style={{flex: 1, paddingTop: insets.top + 20}} alignItems="center">
      <Header />

      <Pressable
        title="View Rules"
        onPress={() => console.log('Navigate_to_screen')}
        containerStyles={[_btnStyle, {left: 30}]}
      />

      <Pressable
        onPress={() => console.log('Navigate_to_screen')}
        containerStyles={[_btnStyle, {right: 30}]}
        title="Enter"
      />
    </View>
  );
};

export default Intro;
