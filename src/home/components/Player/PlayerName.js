import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from '../../../common';
import {shadowAround} from '../../../_Shadow';
import {TextInput} from 'react-native';
import IconButton from 'react-native-vector-icons/AntDesign';

// REDUX
import {useDispatch} from 'react-redux';
import {changeName} from '../../redux/homeSlice';

const PlayerName = ({ballColor, name}) => {
  // State
  const dispatch = useDispatch();

  const [modal, setModal] = React.useState(false);
  const [value, setValue] = React.useState(name);
  const inputRef = React.useRef();

  // // FN: Update Player Name
  const _handleConfirm = () => {
    dispatch(changeName({player: ballColor, name: value}));
    setModal(false);
    setValue('');
  };

  // FN: Open Modal
  const _handleOpenModal = () => {
    setModal(true);
    setValue(name);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  // FN: Close Modal
  const _handleCloseModal = () => {
    setValue('');
    setModal(false);
  };

  // Component: Icon Button
  const Buttons = ({style, iconName, iconColor, onPress}) => {
    return (
      <Pressable containerStyles={style} onPress={onPress}>
        <IconButton name={iconName} size={20} color={iconColor} />
      </Pressable>
    );
  };

  // Component: Name Button
  const NameButton = () => {
    return (
      <Pressable
        onPress={_handleOpenModal}
        containerStyles={styles.nameContainer}>
        <Text numberOfLines={1} fontFamily="Rubik-Medium" fontSize={12}>
          {name || 'Enter Name'}
        </Text>
      </Pressable>
    );
  };

  // RENDER
  return (
    <>
      <NameButton />
      {modal && ( // Modal
        <View style={styles.modalContainer}>
          <Buttons
            iconName="checkcircle"
            iconColor="green"
            style={styles.icon}
            onPress={_handleConfirm}
          />
          <Buttons
            iconName="closecircle"
            iconColor="red"
            style={[styles.icon, {left: -10}]}
            onPress={_handleCloseModal}
          />
          <TextInput
            ref={inputRef}
            placeholder="Enter Name"
            style={{minWidth: '100%', fontSize: 12, textAlign: 'center'}}
            onChangeText={text => setValue(text)}
            value={value}
          />
        </View>
      )}
    </>
  );
};

// STYLES
const styles = StyleSheet.create({
  nameContainer: {
    marginBottom: 6,
    marginTop: 4,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    ...shadowAround,
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: '50%',
    zIndex: 999,
    padding: 20,
    ...shadowAround,
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    right: -5,
    top: -5,
    width: 20,
  },
});

export default PlayerName;
