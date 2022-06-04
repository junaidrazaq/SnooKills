import React, {useCallback} from 'react';
import {Pressable, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// REDUX
import {connect} from 'react-redux';
import {
  addLife as addLifeAction,
  minusLife as minusLifeAction,
} from '../../redux/actions';

const AddRemoveBtns = ({ballColor, lives, addLife, minusLife}) => {
  // FN'S
  const _addLife = useCallback(() => {
    lives >= 5 ? alert('implement_shake_animation') : addLife(ballColor);
  }, [addLife, ballColor, lives]);

  const _minusLife = useCallback(() => {
    lives <= 0 ? alert('implement_shake_animation') : minusLife(ballColor);
  }, [minusLife, ballColor, lives]);

  // RENDER
  return (
    <View horizontal style={{paddingTop: 10, width: '200%'}}>
      <Pressable containerStyles={{left: 10}} onPress={() => _minusLife()}>
        <Icon name="minus" size={30} color="red" />
      </Pressable>
      <Pressable containerStyles={{left: 50}} onPress={() => _addLife()}>
        <Icon name="plus" size={30} color="green" />
      </Pressable>
    </View>
  );
};

// ACTIONS
const mapDispatchToProps = {addLife: addLifeAction, minusLife: minusLifeAction};

export default connect(null, mapDispatchToProps)(AddRemoveBtns);
