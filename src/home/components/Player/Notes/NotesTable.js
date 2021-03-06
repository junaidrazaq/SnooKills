import React from 'react';
import {Pressable, Text} from '../../../../common';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Table, Row, TableWrapper, Cell} from 'react-native-table-component';
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

const NotesTable = ({tableHead, tableData, onDel}) => {
  // RENDER
  return (
    <View style={styles.tableContainer}>
      <NotesInfo />
      <Table children>
        <Row
          data={tableHead}
          widthArr={[40, 70, 55, 120]}
          style={styles.head}
          textStyle={[styles.text, {fontFamily: 'Rubik-Medium'}]}
        />
        {tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) =>
              cellIndex === 3 ? ( // Last cell
                <View key={cellIndex} style={styles.lastRowContainer}>
                  <Cell
                    width={116}
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.text}
                  />
                  <Pressable
                    onPress={() => onDel(index)}
                    containerStyles={styles.delete}>
                    <Icon name="delete" size={20} color="red" />
                  </Pressable>
                </View>
              ) : (
                <Cell // Other cells
                  width={cellIndex === 0 ? 40 : cellIndex === 1 ? 70 : 55}
                  key={cellIndex}
                  data={cellData}
                  style={{borderWidth: 2, borderColor: '#c8e1ff'}}
                  textStyle={styles.text}
                />
              ),
            )}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
};

// STYLES
const styles = StyleSheet.create({
  tableContainer: {padding: 16, paddingTop: 15},
  text: {margin: 6, fontFamily: 'Rubik-Light', fontSize: 10, color: '#000'},
  row: {flexDirection: 'row'},
  delete: {position: 'absolute', right: 4, top: 4},
  lastRowContainer: {borderWidth: 2, borderTopWidth: 0, borderColor: '#c8e1ff'},
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
});

export default NotesTable;
