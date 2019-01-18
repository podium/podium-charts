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

export const multiDataset = data => {
  const combinedData = Object.keys(data).reduce((outsideAcc, alias) => {
    // The reduce below represents each row in a single query result.
    // The result of the reduce would be { "2018-1-01": { "google" : { alias1: 1, alias2: 2 }}}
    return data[alias].reduce((insideAcc, row) => {
      if (row.groupBy) {
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
