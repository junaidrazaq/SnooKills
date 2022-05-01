import React from 'react';
import {Text, View} from '../../common';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// REDUX
import {connect} from 'react-redux';
import {getCount} from '../redux/selectors';
import {addCount, minusCount} from '../redux/actions';

const Counter = ({count, addCount, minusCount}) => {
  // RENDER
  return (
    <View center>
      <Text>{count}</Text>
      <Pressable onPress={() => addCount()}>
        <Text>Increase</Text>
      </Pressable>
      <Pressable onPress={() => minusCount()}>
        <Text>Decrease</Text>
      </Pressable>
    </View>
  );
};

const mapStateToProps = state => {
  return {count: getCount(state)};
};

const mapDispatchToProps = {
  addCount: addCount,
  minusCount: minusCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
