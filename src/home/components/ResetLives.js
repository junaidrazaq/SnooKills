import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, Text} from '../../common';
import {shadowLight} from '../../_Shadow';
import {StyleSheet, Alert} from 'react-native';

// REDUX
import {resetState} from '../redux/actions';
import {connect} from 'react-redux';

const ResetLives = ({resetLives}) => {
  const insets = useSafeAreaInsets();

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
        {text: 'OK', onPress: () => resetLives()},
      ],
      {cancelable: false},
    );
  };

  // RENDER
  return (
    <Pressable
      onPress={() => _onPress()}
      containerStyles={[styles.container, {bottom: insets.bottom + 20}]}>
      <Text color="#fff" fontFamily="Rubik-Bold">
        Reset Game
      </Text>
    </Pressable>
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

// ACTIONS
const mapDispatchToProps = {resetLives: resetState};

export default connect(null, mapDispatchToProps)(ResetLives);
