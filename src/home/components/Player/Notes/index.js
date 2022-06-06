import React from 'react';
import Heading from './Heading';
import NotesTable from './NotesTable';

const Notes = ({name, ballColor, onClose, notes}) => {
  console.log('notes', notes);
  // STATE
  const tableHead = ['Lives', 'Potted', 'Pocket', 'Notes'];
  const [tableData, setTableData] = React.useState([
    ['-', '2', '3', 'This guys a retard he potted himself'],
    ['-', 'b', 'c', 'd'],
    ['+', '2', '3', '456\n789'],
    ['*', 'b', 'c', 'd'],
  ]);

  // RENDER
  return (
    <>
      <Heading name={name} ballColor={ballColor} onClose={onClose} />
      <NotesTable tableHead={tableHead} tableData={notes} />
    </>
  );
};

export default Notes;
