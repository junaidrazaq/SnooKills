import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingIndicator = ({containerStyles, style, color, ...props}) => {
  return (
    <View
      style={[styles.container, containerStyles]}
      alignItems="center"
      justifyContent="center">
      <ActivityIndicator style={style} color={color} size="small" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingIndicator;
