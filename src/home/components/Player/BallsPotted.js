import React from 'react';
import {Pressable, Text, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {shadowAround, shadowVeryLight} from '../../../_Shadow';
import {StyleSheet} from 'react-native';

// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {
  addPotted,
  removePotted,
  selectBallByColor,
} from '../../redux/homeSlice';

const RedsPotted = ({ballType, ballColor}) => {
  // Redux_State
  const dispatch = useDispatch();
  const {redsPotted, colorsPotted} = useSelector(state =>
    selectBallByColor(state, ballColor),
  );
  const pottedType = ballType === 'Reds' ? 'redsPotted' : 'colorsPotted';
  const valToShow = ballType === 'Reds' ? redsPotted : colorsPotted;

  // FN: Add potted ball
  const _onAdd = () => {
    dispatch(addPotted({player: ballColor, type: pottedType}));
  };

  // FN: Remove potted ball
  const _onRemove = () => {
    dispatch(removePotted({player: ballColor, type: pottedType}));
  };

  // ------ || ------ \\
  // RENDER || RENDER \\
  return (
    <View
      horizontal
      justifyContent="space-around"
      alignItems="center"
      style={styles.container}>
      <Pressable onPress={_onRemove}>
        <Icon name="minus-circle" color="red" size={18} />
      </Pressable>
      <Text
        color={ballType === 'Reds' ? 'red' : '#444'}
        fontFamily="Rubik-Medium"
        fontSize={12}>
        {ballType}: {valToShow}
      </Text>
      <Pressable onPress={_onAdd}>
        <Icon name="plus-circle" color="green" size={18} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 3,
    borderRadius: 5,
    ...shadowVeryLight,
  },
});

export default RedsPotted;
