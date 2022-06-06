import React from 'react';
import {Alert} from 'react-native';

// COMPONENTS
import NotesTable from './NotesTable';
import Heading from './Heading';

// REDUX:
import {connect} from 'react-redux';
import {updatePlayer as updatePlayerAction} from '../../../redux/actions';

const Notes = ({name, ballColor, onClose, notes, updatePlayer}) => {
  // STATE
  const tableHead = ['Lives', 'Potted (By)', 'Pocket', 'Notes'];

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
          await updatePlayer({type: `${ballColor}NotesUpdate`, index: index});
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

// ACTIONS
const mapDispatchToProps = {updatePlayer: updatePlayerAction};

export default connect(null, mapDispatchToProps)(Notes);
