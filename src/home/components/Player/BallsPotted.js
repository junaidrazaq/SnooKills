import React from 'react';
import {Pressable, Text, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {shadowVeryLight} from '../../../_Shadow';

const RedsPotted = ({ballType, ballColor}) => {
  return (
    <View
      horizontal
      justifyContent="space-around"
      style={{
        marginVertical: 4,
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: 3,
        borderRadius: 5,
        ...shadowVeryLight,
      }}>
      <Pressable>
        <Icon name="minus-circle-outline" size={14} />
      </Pressable>
      <Text
        color={ballType === 'Reds' ? 'red' : '#444'}
        fontFamily="Rubik-Medium"
        fontSize={12}>
        {ballType}: 0
      </Text>
      <Pressable>
        <Icon name="plus-circle-outline" size={14} />
      </Pressable>
    </View>
  );
};

export default RedsPotted;
