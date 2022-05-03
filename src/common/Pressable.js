import * as React from 'react';
import {Pressable} from 'react-native';
import {Text} from '.';
import {shadowLight} from '../_Shadow';

const CustomPressable = ({
  containerStyles,
  title,
  bgColor,
  textColor,
  onPress,
  children,
  button,
  ...props
}) => {
  const buttonStyles = {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    ...shadowLight,
  };

  //   RENDER
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        button ? buttonStyles : null,
        containerStyles,
        {opacity: pressed ? 0.2 : 1},
        bgColor ? {backgroundColor: bgColor} : null,
      ]}
      {...props}>
      {title && (
        <Text fontFamily="Rubik-Medium" color={textColor ? textColor : '#fff'}>
          {title}
        </Text>
      )}
      {children}
    </Pressable>
  );
};

/* Default Props
============================================================================= */
CustomPressable.defaultProps = {
  bgColor: null,
};

/* Export
============================================================================= */
export default CustomPressable;
