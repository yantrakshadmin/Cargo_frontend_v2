import React from 'react';
import { View, Text } from 'react-native';
import { font, row, tableStyle } from '../styles/advanceStyles';
import { margin, yantraColors } from '../styles/default';

export const TableCreate = ({
  headingStyle,
  column,
  data,
  fontStyle,
  dataCellStyle,
  headingCellStyle,
}) => {
  const cellWidth = 100 / column.length || 0;
  return column ? (
    <View style={[margin('margin').md, tableStyle.border]}>
      <View style={[row]}>
        {column.map((item, index) => (
          <View
            key={item.key}
            style={[
              { width: `${cellWidth}%`, borderRightWidth: index === column.length - 1 ? 0 : 1 },
              tableStyle.headingCell,
              headingCellStyle,
            ]}>
            <Text style={[font(12, 'bold'), headingStyle]}>{item.title}</Text>
          </View>
        ))}
      </View>
      {data.map((rowData) => (
        <View style={[row, tableStyle.dataCellContainer]}>
          {column.map((item, index) => (
            <View
              key={rowData[item.dataIndex]}
              style={[
                { width: `${cellWidth}%`, borderRightWidth: index === column.length - 1 ? 0 : 1 },
                tableStyle.headingCell,
                dataCellStyle,
              ]}>
              <Text style={[font(12), fontStyle]}>{rowData[item.dataIndex]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  ) : null;
};
