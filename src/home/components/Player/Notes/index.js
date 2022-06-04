import React from 'react';
import Heading from './Heading';
import NotesTable from './NotesTable';

const index = ({name, ballColor, onClose}) => {
  // STATE
  const [tableHead, setTableHead] = React.useState([
    'Action',
    'Potted',
    'Pocket',
    'Notes',
  ]);
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
      <NotesTable tableHead={tableHead} tableData={tableData} />
    </>
  );
};

export default index;
