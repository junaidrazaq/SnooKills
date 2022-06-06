import React, {useEffect} from 'react';
import {Pressable, Text, View} from '../../../common';
import {StyleSheet, TextInput} from 'react-native';
import {shadowAround} from '../../../_Shadow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';

const AddNoteForm = ({name, ballColor, onClose, updatePlayer, lives}) => {
  // State
  const [whoPotted, setWhoPotted] = React.useState('');
  const [wherePotted, setWherePotted] = React.useState('');
  const [notes, setNotes] = React.useState('');
  const inputRef = React.useRef();

  // On render
  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  }, []);

  // On confirm
  const _handleConfirm = async () => {
    await updatePlayer({
      type: `${ballColor}Notes`,
      notes: [`${lives - 1} - ${lives}`, whoPotted, wherePotted, notes],
    });
    await onClose();
  };

  // On close
  const _handleClose = async () => {
    await updatePlayer({
      type: `${ballColor}Notes`,
      notes: [`${lives - 1} - ${lives}`, '--', '--', '--'],
    });
    await onClose();
  };

  // RENDER
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Who */}
        <TextInput
          ref={inputRef}
          placeholder={`What did ${
            name ? name : ballColor
          } pot? (3 reds/white)`}
          style={styles.textInput}
          onChangeText={text => setWhoPotted(text)}
          value={whoPotted}
        />

        {/* Where? */}
        <TextInput
          placeholder={`Where did ${name ? name : ballColor} pot?`}
          style={styles.textInput}
          onChangeText={text => setWherePotted(text)}
          value={wherePotted}
        />

        {/* Extra Notes */}
        <TextInput
          placeholder={`Add any extra notes here`}
          style={styles.textInput}
          onChangeText={text => setNotes(text)}
          value={notes}
        />

        {/* Confirm */}
        <Pressable containerStyles={styles.icon} onPress={_handleConfirm}>
          <Text fontFamily="Rubik-Medium" style={{marginRight: 5}}>
            Confirm
          </Text>
          <IconButton name="checkcircle" size={16} color="green" />
        </Pressable>

        {/* Close */}
        <Pressable onPress={_handleClose} containerStyles={styles.close}>
          <Icon name="close-circle" size={22} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 99,
  },
  wrapper: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    ...shadowAround,
  },
  close: {
    position: 'absolute',
    top: -7,
    right: -7,
    zIndex: 999,
  },
  textInput: {
    minWidth: '100%',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
    paddingVertical: 12,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    ...shadowAround,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(AddNoteForm);
