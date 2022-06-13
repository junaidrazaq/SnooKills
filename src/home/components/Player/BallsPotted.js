import React from 'react';
import {Pressable, Text, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RedsPotted = ({ballType}) => {
  return (
    <View
      horizontal
      justifyContent="space-around"
      style={{marginVertical: 4, width: '100%', backgroundColor: '#fff'}}>
      <Pressable>
        <Icon name="minus-circle-outline" size={14} />
      </Pressable>
      <Text fontFamily="Rubik-Medium" fontSize={12}>
        {ballType}:
      </Text>
      <Pressable>
        <Icon name="plus-circle-outline" size={14} />
      </Pressable>
    </View>
  );
};

export default RedsPotted;
