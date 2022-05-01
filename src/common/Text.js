import * as React from 'react';
import {Text} from 'react-native';

const CustomText = ({
  flex,
  style,
  align,
  color,
  italic,
  children,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textTransform,
  numberOfLines,
  marginVertical,
  marginHorizontal,
  selectable,
  theme,
  ...props
}) => {
  const _style = {
    flex,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    textTransform,
    marginVertical,
    marginHorizontal,
    textAlign: align,
  };

  //   RENDER
  return (
    <Text
      selectable={selectable ? selectable : false}
      numberOfLines={numberOfLines}
      style={[_style, style, {color: color}]}
      {...props}>
      {children}
    </Text>
  );
};

/* Default Props
============================================================================= */
CustomText.defaultProps = {
  fontSize: 14,
  italic: false,
  align: 'left',
  color: '#333',
  marginVertical: 0,
  marginHorizontal: 0,
  numberOfLines: null,
  fontFamily: 'Rubik-Light',
};

/* Export
============================================================================= */
export default CustomText;
