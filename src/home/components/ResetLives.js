import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable} from '../../common';
import {shadowLight} from '../../_Shadow';
import {StyleSheet, Alert} from 'react-native';

// REDUX
import {useDispatch} from 'react-redux';
import {resetGame} from '../redux/homeSlice';

const ResetLives = () => {
  // Local_state
  const [loading, setLoading] = React.useState(false);

  // Redux_State
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // FN: Reset game
  const _resetGame = async () => {
    await dispatch(resetGame());
  };

  // ALERT: Reset game
  const _onPress = () => {
    Alert.alert(
      'Reset Game',
      'Are you sure you want to reset all game?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: _resetGame},
      ],
      {cancelable: false},
    );
  };

  // RENDER
  return (
    <Pressable
      loading={loading}
      title="Reset Game"
      onPress={() => _onPress()}
      containerStyles={[styles.container, {bottom: insets.bottom + 20}]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    ...shadowLight,
  },
});

export default ResetLives;
