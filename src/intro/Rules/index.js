import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from '../../common';
import HeaderWithBack from '../../common/HeaderWithBack';

const Rules = () => {
  const insets = useSafeAreaInsets();

  // RENDER
  return (
    <View style={{flex: 1, paddingTop: insets.top + 20}}>
      <HeaderWithBack text="Rules Of Kills" />
    </View>
  );
};

export default Rules;
