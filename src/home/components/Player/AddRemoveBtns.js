import React from 'react';
import {Pressable, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlayerLives from './PlayerLives';

const AddRemoveBtns = ({_onAdd, _onMinus, noLives, lives}) => {
  // STYLES
  const styles = {paddingVertical: 5, width: '100%'};

  // RENDER
  return (
    <View horizontal style={styles} justifyContent="space-between">
      <Pressable onPress={() => _onMinus()}>
        <Icon name="minus" size={25} color="red" />
      </Pressable>
      <PlayerLives noLives={noLives} lives={lives} />
      <Pressable onPress={() => _onAdd()}>
        <Icon name="plus" size={25} color="green" />
      </Pressable>
    </View>
  );
};

export default AddRemoveBtns;
