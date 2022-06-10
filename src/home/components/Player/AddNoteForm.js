import React, {useState} from 'react';
import {Pressable, Text, View, DropDownPicker} from '../../../common';
import {StyleSheet, TextInput} from 'react-native';
import {shadowAround, shadowDark} from '../../../_Shadow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from 'react-native-vector-icons/AntDesign';

// REDUX
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../redux/actions';

const AddNoteForm = ({
  name,
  ballColor,
  onClose,
  updatePlayer,
  lives,
  gainedLife,
  onKills,
}) => {
  // State
  const [whoPotted, setWhoPotted] = React.useState('');
  const [pottedByItems, setPottedByItems] = useState([
    {label: 'Potted by who?', value: ''},
    {label: 'Yellow', value: 'yellow'},
    {label: 'Green', value: 'green'},
    {label: 'Brown', value: 'brown'},
    {label: 'Blue', value: 'blue'},
    {label: 'Pink', value: 'pink'},
    {label: 'Black', value: 'black'},
  ]);
  const [whatPotted, setWhatPotted] = React.useState('');
  const [whatPottedItems, setWhatPottedItems] = useState([
    {label: 'What potted?', value: ''},
    {label: 'Three Reds', value: 'Three Reds'},
    {label: 'White', value: 'White'},
  ]);
  const [wherePotted, setWherePotted] = React.useState('');
  const [wherePottedItems, setWherePottedItems] = useState([
    {label: 'Where potted?', value: ''},
    {label: 'Top Left', value: 'Top Left'},
    {label: 'Top Right', value: 'Top Right'},
    {label: 'Middle Left', value: 'Middle Left'},
    {label: 'Middle Right', value: 'Middle Right'},
    {label: 'Bottom Left', value: 'Bottom Left'},
    {label: 'Bottom Right', value: 'Bottom Right'},
  ]);
  const [notes, setNotes] = React.useState('');

  // FN: On confirm
  const _handleConfirm = async () => {
    await updatePlayer({
      type: `${ballColor}Notes`,
      notes: [
        onKills ? 'Kills' : `${gainedLife ? lives - 1 : lives + 1} - ${lives}`,
        onKills ? 'Red' : gainedLife ? whatPotted : whoPotted,
        wherePotted,
        notes,
      ],
    });
    await onClose();
  };

  const header = `How did ${name || ballColor}${
    gainedLife ? ' get life?' : onKills ? ' get on kills?' : ' lose life?'
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

        {onKills && (
          <View alignItems="center">
            <DropDownPicker // **|| Where potted ||** \\
              placeholder="Potted where?"
              // containerStyle={{width: '45%', marginTop: 8}}
              value={wherePotted}
              setValue={setWherePotted}
              items={wherePottedItems}
              setItems={setWherePottedItems}
            />
          </View>
        )}

        {!onKills && (
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

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(AddNoteForm);
