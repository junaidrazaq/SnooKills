import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, View} from '../common';

// COMPONENTS
import Header from './Header';
import SkiaTest from './SkiaTest';

const Intro = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  // STYLES
  const _btnStyle = {
    bottom: insets.bottom + 20,
    position: 'absolute',
  };

  // RENDER
  return (
    <>
      <View style={{flex: 1, paddingTop: insets.top + 20}} alignItems="center">
        <Header />

        <Pressable
          title="View Rules"
          onPress={() => navigation.navigate('Rules')}
          containerStyles={[_btnStyle, {left: 30}]}
          button
        />

        <Pressable
          onPress={() => navigation.navigate('Home')}
          containerStyles={[_btnStyle, {right: 30}]}
          title="Enter"
          button
        />
      </View>
      <SkiaTest />
    </>
  );
};

export default Intro;
