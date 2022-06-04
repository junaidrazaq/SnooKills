import React, {useCallback} from 'react';
import {Pressable, View} from '../../../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// REDUX
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';

const AddRemoveBtns = ({ballColor, lives, updatePlayer}) => {
  // STYLES
  const styles = {paddingTop: 5, width: '100%'};

  // FN: ADD LIFE
  const _addLife = useCallback(() => {
    lives >= 5
      ? alert('implement_shake_animation')
      : updatePlayer({type: `${ballColor}LivesAdd`});
  }, [ballColor, lives]);

  // FN: REMOVE LIFE
  const _minusLife = useCallback(() => {
    lives <= 0
      ? alert('implement_shake_animation')
      : updatePlayer({type: `${ballColor}LivesMinus`});
  }, [ballColor, lives]);

  // RENDER
  return (
    <View horizontal style={styles} justifyContent="space-between">
      <Pressable onPress={() => _minusLife()}>
        <Icon name="minus" size={30} color="red" />
      </Pressable>
      <Pressable onPress={() => _addLife()}>
        <Icon name="plus" size={30} color="green" />
      </Pressable>
    </View>
  );
};

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(AddRemoveBtns);
