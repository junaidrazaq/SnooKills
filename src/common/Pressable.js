import * as React from 'react';
import {TouchableOpacity} from 'react-native';
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
  // console.log('pressableRendered');
  const buttonStyles = {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    ...shadowLight,
  };

  //   RENDER
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[
        button ? buttonStyles : null,
        bgColor ? {backgroundColor: bgColor} : null,
        containerStyles,
      ]}>
      {title && (
        <Text fontFamily="Rubik-Medium" color={textColor ? textColor : '#fff'}>
          {title}
        </Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

/* Default Props
============================================================================= */
CustomPressable.defaultProps = {
  bgColor: null,
};

/* Export
============================================================================= */
export default React.memo(CustomPressable);
