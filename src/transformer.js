import _ from 'lodash';

export default function transformer(data) {
  const groupedData = _.groupBy(_.cloneDeep(data), 'granularity');
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
