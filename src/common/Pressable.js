import * as React from 'react';
import {Pressable, Animated} from 'react-native';
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
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  //   RENDER
  return (
    <Animated.View style={[{opacity: animated}, containerStyles]}>
      <Pressable
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        onPress={onPress}
        style={[
          button ? buttonStyles : null,
          bgColor ? {backgroundColor: bgColor} : null,
        ]}
        {...props}>
        {title && (
          <Text
            fontFamily="Rubik-Medium"
            color={textColor ? textColor : '#fff'}>
            {title}
          </Text>
        )}
        {children}
      </Pressable>
    </Animated.View>
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
