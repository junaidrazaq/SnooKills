import React from 'react';
import {Pressable} from '../../../common';
import {StyleSheet} from 'react-native';

// REDUX
import {connect} from 'react-redux';
import {toggleKills as toggleKillsAction} from '../../redux/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const KillsBtn = ({ballColor, toggleKills}) => {
  // RENDER
  return (
    <Pressable
      onPress={() => toggleKills(ballColor)}
      containerStyles={styles.kills}>
      <Icon name="plus" size={17} color="#fff" />
    </Pressable>
  );
};

// STYLES
const styles = StyleSheet.create({
  kills: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ACTIONS
const mapDispatchToProps = {toggleKills: toggleKillsAction};

export default connect(null, mapDispatchToProps)(KillsBtn);

// export default KillsBtn;
