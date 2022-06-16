import React, {useEffect, useState} from 'react';
import {Pressable, Text, View, DropDownPicker} from '../../../common';
import {StyleSheet, TextInput} from 'react-native';
import {shadowAround, shadowDark} from '../../../_Shadow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/AntDesign';

// REDUX
import {useDispatch} from 'react-redux';
import {addNote, toggleKills} from '../../redux/homeSlice';

const AddNoteForm = ({
  name,
  ballColor,
  onClose,
  lives,
  gainedLife,
  onKillsNotes,
  lostLife,
}) => {
  // State
  const dispatch = useDispatch();
  const [whoPotted, setWhoPotted] = React.useState('');
  const [pottedByItems, setPottedByItems] = useState([
    {label: 'Potted by who?', value: ''},
    {label: 'Yellow', value: 'Yellow'},
    {label: 'Green', value: 'Green'},
    {label: 'Brown', value: 'Brown'},
    {label: 'Blue', value: 'Blue'},
    {label: 'Pink', value: 'Pink'},
    {label: 'Black', value: 'Black'},
  ]);
  // What Potted \\
  const [whatPotted, setWhatPotted] = React.useState('');
  const [whatPottedItems, setWhatPottedItems] = useState([
    {label: 'What potted?', value: ''},
    {label: 'Three Reds', value: 'Three Reds'},
    {label: 'White', value: 'White'},
  ]);
  const [wherePotted, setWherePotted] = React.useState('');
  const [wherePottedItems, setWherePottedItems] = useState([
    {label: 'Where potted?', value: ''},
    {label: 'Top Left', value: 'TL'},
    {label: 'Top Right', value: 'TR'},
    {label: 'Middle Left', value: 'ML'},
    {label: 'Middle Right', value: 'MR'},
    {label: 'Bottom Left', value: 'BL'},
    {label: 'Bottom Right', value: 'BR'},
  ]);
  const [notes, setNotes] = React.useState('');

  // Remove current team colors from list of 'potted by' options
  useEffect(() => {
    ballColor === 'yellow' || ballColor === 'brown' || ballColor === 'pink'
      ? setPottedByItems(
          pottedByItems.filter(
            item =>
              item.label !== 'Yellow' &&
              item.label !== 'Brown' &&
              item.label !== 'Pink',
          ),
        )
      : setPottedByItems(
          pottedByItems.filter(
            item =>
              item.label !== 'Green' &&
              item.label !== 'Blue' &&
              item.label !== 'Black',
          ),
        );
  }, []);

  // FN: On confirm
  const _handleConfirm = async () => {
    if (onKillsNotes) {
      await dispatch(toggleKills({player: ballColor}));
    }
    await dispatch(
      addNote({
        player: ballColor,
        note: [
          onKillsNotes
            ? 'Kills'
            : `${gainedLife ? lives - 1 : lives + 1} - ${lives}`,
          onKillsNotes ? 'Red' : gainedLife ? whatPotted : whoPotted,
          wherePotted,
          notes,
        ],
        pottedBy: lostLife ? whoPotted.toLowerCase() : null,
      }),
    );
    await onClose();
  };

  const header = `How did ${name || ballColor}${
    gainedLife ? ' get life?' : onKillsNotes ? ' get on kills?' : ' lose life?'
  }`;

  // RENDER
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{paddingBottom: 15, paddingLeft: 10}}>
          <Text
            style={{textTransform: 'capitalize'}}
            fontFamily="Rubik-Bold"
            color={ballColor == 'yellow' ? '#777' : ballColor}
            fontSize={18}>
            {header}
          </Text>
        </View>

        {onKillsNotes && (
          <View alignItems="center">
            <DropDownPicker // **|| Where potted ||** \\
              placeholder="Potted where?"
              value={wherePotted}
              setValue={setWherePotted}
              items={wherePottedItems}
              setItems={setWherePottedItems}
            />
          </View>
        )}

        {!onKillsNotes && (
          <View style={{marginTop: 8}} alignItems="center">
            <DropDownPicker // **|| What potted ||** \\
              placeholder={gainedLife ? 'Potted what?' : 'Who potted?'}
              containerStyle={{zIndex: 999, elevation: 5}}
              value={gainedLife ? whatPotted : whoPotted}
              setValue={gainedLife ? setWhatPotted : setWhoPotted}
              items={gainedLife ? whatPottedItems : pottedByItems}
              setItems={gainedLife ? setWhatPottedItems : setPottedByItems}
            />
            <DropDownPicker // **|| Where potted ||** \\
              placeholder="Potted where?"
              containerStyle={{marginTop: 18, zIndex: 998}}
              value={wherePotted}
              setValue={setWherePotted}
              items={wherePottedItems}
              setItems={setWherePottedItems}
            />
          </View>
        )}

        {/* Extra Notes */}
        <View style={styles.notesContainer}>
          <Text color="#777" style={[styles.placeholderStyle]}>
            Extra notes...
          </Text>
          <TextInput
            placeholder={`Extra notes...`}
            style={styles.textInput}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
        </View>

        {/* Confirm */}
        <Pressable containerStyles={styles.icon} onPress={_handleConfirm}>
          <Text
            fontFamily="Rubik-Medium"
            style={{marginRight: 5}}
            color="#fff"
            fontSize={12}>
            Confirm
          </Text>
          <IconButton name="checkcircle" size={13} color="#fff" />
        </Pressable>

        {/* Close */}
        <Pressable onPress={() => onClose()} containerStyles={styles.close}>
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
    ...shadowDark,
    elevation: 20,
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
    borderRadius: 5,
    color: 'green',
    fontWeight: '700',
  },
  icon: {
    flexDirection: 'row',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: -7,
    right: -7,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    zIndex: -1,
    ...shadowAround,
  },
  placeholderStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 10,
    position: 'absolute',
    top: -11,
    left: -3,
  },
  notesContainer: {
    // width: '45%',
    alignSelf: 'center',
    marginTop: 17,
    zIndex: -1,
  },
});

export default AddNoteForm;
