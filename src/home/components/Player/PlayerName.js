import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../../../common';
import {shadowAround} from '../../../_Shadow';

const PlayerName = ({name}) => {
  // RENDER
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} fontSize={12} fontFamily="Rubik-Medium">
        {name}
      </Text>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    marginTop: 4,
    backgroundColor: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    ...shadowAround,
  },
});

export default PlayerName;
