import React from 'react';
import {Alert} from 'react-native';

// COMPONENTS
import NotesTable from './NotesTable';
import Heading from './Heading';
import {useDispatch} from 'react-redux';
import {removeNote} from '../../../redux/homeSlice';

// REDUX:

const Notes = ({name, ballColor, onClose, notes, updatePlayer}) => {
  // STATE
  const tableHead = ['Lives', 'Potted (By)', 'Pocket', 'Notes'];
  const dispatch = useDispatch();

  // FN: On delete
  const _handleDelete = async index => {
    Alert.alert('Delete Note', `Are you sure you want to delete this note?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          await dispatch(removeNote({player: ballColor, index: index}));
        },
      },
    ]);
  };

  // RENDER
  return (
    <>
      <Heading name={name} ballColor={ballColor} onClose={onClose} />
      <NotesTable
        tableHead={tableHead}
        tableData={notes}
        onDel={_handleDelete}
      />
    </>
  );
};

export default Notes;
