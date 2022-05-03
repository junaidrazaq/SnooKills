import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Pressable, Text, View} from '.';

const CustomHeaderWithBack = ({text}) => {
  const navigation = useNavigation();

  // RENDER
  return (
    <View horizontal paddingHorizontal={20} alignItems="center">
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={30} />
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
