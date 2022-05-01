import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Text} from '.';
import {shadowLight} from '../_Shadow';

const CustomPressable = ({
  containerStyles,
  title,
  bgColor,
  textColor,
  onPress,
  ...props
}) => {
  const _style = {
    bgColor,
  };
  //   RENDER
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        containerStyles,
        {opacity: pressed ? 0.2 : 1, backgroundColor: bgColor},
      ]}
      {...props}>
      <Text fontFamily="Rubik-Medium" color={textColor ? textColor : '#fff'}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    ...shadowLight,
  },
});

/* Default Props
============================================================================= */
CustomPressable.defaultProps = {
  bgColor: '#929',
};

/* Export
============================================================================= */
export default CustomPressable;
