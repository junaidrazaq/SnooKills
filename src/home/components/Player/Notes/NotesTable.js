import React from 'react';
import {View} from '../../../../common';
import {Table, Row, Rows} from 'react-native-table-component';
import {StyleSheet} from 'react-native';
import {LogBox} from 'react-native';
import NotesInfo from './NotesInfo';

// Ignore these error:
LogBox.ignoreLogs([
  'Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.',
]);
LogBox.ignoreLogs([
  'Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Rows`, expected `object`.',
]);
LogBox.ignoreLogs([
  'Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Row`, expected `object`.',
]);

const NotesTable = ({tableHead, tableData}) => {
  // RENDER
  return (
    <View style={styles.tableContainer}>
      <NotesInfo />
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row
          data={tableHead}
          widthArr={[50, 50, 50, 130]}
          style={styles.head}
          textStyle={[styles.text, {fontFamily: 'Rubik-Medium', fontSize: 11}]}
        />
        <Rows
          data={tableData}
          widthArr={[50, 50, 50, 130]}
          textStyle={[styles.text, {fontSize: 10}]}
        />
      </Table>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  tableContainer: {
    padding: 16,
    paddingTop: 15,
    width: '100%',
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default NotesTable;
