import React from 'react';
import RNDropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet, View, Text} from 'react-native';

const DropDownPicker = ({
  containerStyle,
  style,
  placeholderStyle,
  textStyle,
  placeholder,
  value,
  setValue,
  items,
  setItems,
  ...props
}) => {
  // STATE
  const [open, setOpen] = React.useState(false);

  // RENDER
  return (
    <View style={[containerStyle]}>
      {/* {value !== '' && ( */}
      <Text style={[styles.placeholderStyle]}>{placeholder}</Text>
      {/* )} */}
      <RNDropDownPicker
        style={[styles.defaultStyle, style, {minHeight: 40, marginTop: 3}]}
        textStyle={[styles.textStyle, textStyle]}
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        dropDownContainerStyle={[styles.defaultStyle]}
        value={value}
        setValue={setValue}
        items={items}
        setItems={setItems}
        open={open}
        setOpen={setOpen}
        {...props}
      />
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  placeholderStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 10,
    color: '#777',
    position: 'absolute',
    top: -12,
    left: -3,
  },
  defaultStyle: {borderWidth: 1.5, borderColor: '#ccc', borderRadius: 5},
  textStyle: {fontFamily: 'Rubik-Medium', fontSize: 12, color: '#777'},
});

export default DropDownPicker;
