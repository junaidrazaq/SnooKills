import React from 'react';
import {View} from 'react-native';

const CustomView = ({
  children,
  style,
  center,
  margin,
  padding,
  horizontal,
  alignItems,
  justifyContent,
  marginVertical,
  paddingVertical,
  backgroundColor,
  marginHorizontal,
  paddingHorizontal,
  flex,
  ...props
}) => {
  const _style = {
    flex,
    margin,
    padding,
    marginVertical,
    backgroundColor,
    paddingVertical,
    marginHorizontal,
    paddingHorizontal,
    flexDirection: horizontal ? 'row' : 'column',
    alignItems: center ? 'center' : alignItems,
    justifyContent: center ? 'center' : justifyContent,
  };

  //  RENDER
  return (
    <View style={[_style, style]} {...props}>
      {children}
    </View>
  );
};

CustomView.defaultProps = {
  center: false,
  horizontal: false,
  backgroundColor: 'transparent',
};

export default CustomView;
