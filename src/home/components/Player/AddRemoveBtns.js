import React from 'react';
import {Pressable, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddRemoveBtns = ({_onAdd, _onMinus}) => {
  // STYLES
  const styles = {paddingTop: 5, width: '100%'};

  // RENDER
  return (
    <View horizontal style={styles} justifyContent="space-between">
      <Pressable onPress={() => _onMinus()}>
        <Icon name="minus" size={30} color="red" />
      </Pressable>
      <Pressable onPress={() => _onAdd()}>
        <Icon name="plus" size={30} color="green" />
      </Pressable>
    </View>
  );
};

export default AddRemoveBtns;
