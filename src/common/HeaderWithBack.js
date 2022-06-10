import React from 'react';
import {Pressable, Text, View} from '.';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomHeaderWithBack = ({text}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // RENDER
  return (
    <View
      horizontal
      paddingHorizontal={20}
      alignItems="center"
      style={{paddingTop: insets.top + 20}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={30} color="#000" />
      </Pressable>
      <Text style={{paddingLeft: 10}} fontFamily="Rubik-Bold" fontSize={18}>
        {text}
      </Text>
    </View>
  );
};

CustomHeaderWithBack.defaultProps = {
  text: null,
};

export default CustomHeaderWithBack;
