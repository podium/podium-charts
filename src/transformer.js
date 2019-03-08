import groupBy from 'lodash.groupby';
import cloneDeep from 'lodash.clonedeep';
import set from 'lodash.set';

export const singleDataset = data => {
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
};

export const multiDataset = (data, groupBy = null) => {
  const combinedData = Object.keys(data).reduce((outsideAcc, alias) => {
    // There are three ways to use this transformer:
    //   1) Pass in custom groupBy
    //     { "2018-1-01": { [groupBy]: { alias1: 1, alias2: 2 }}}
    //   2) Use groupBy from query that's on the row
    //     { "2018-1-01": { [row.groupBy]: { alias1: 1, alias2: 2 }}}
    //   3) No groupBy or row.groupBy resulting in no nesting
    //     { "2018-1-01": { alias1: 1, alias2: 2 }}
    return data[alias].reduce((insideAcc, row) => {
      if (groupBy) {
        return set(insideAcc, [row.granularity, groupBy, alias], row.value);
      } else if (row.groupBy) {
        return set(insideAcc, [row.granularity, row.groupBy, alias], row.value);
      }
      return set(insideAcc, [row.granularity, alias], row.value);
    }, outsideAcc);
  }, {});
  // We now map through each date and flatten the object into a single layer
  // example: { date: "2018-1-01", google: { alias1: 1, alias2: 2 } }
  return Object.keys(combinedData).map(granularity => {
    const dateData = combinedData[granularity];
    return { ...dateData, date: granularity };
  });
};

export default {
  singleDataset,
  multiDataset
};
