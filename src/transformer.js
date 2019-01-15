import groupBy from 'lodash.groupby';
import cloneDeep from 'lodash.clonedeep';

export default function transformer(data) {
  const groupedData = groupBy(cloneDeep(data), 'granularity');
  return Object.keys(groupedData).map(gran => {
    return groupedData[gran].reduce(
      (newRow, currData) => {
        const dataKey = currData.groupBy || 'value';
        newRow[dataKey] = currData.value;
        return newRow;
      },
      { date: gran }
    );
  });
}
