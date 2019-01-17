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
    return data[alias].reduce((insideAcc, row) => {
      return set(insideAcc, [row.granularity, row.groupBy, alias], row.value);
    }, outsideAcc);
  }, {});
  const transformedData = Object.keys(combinedData).map(granularity => {
    const sites = combinedData[granularity];
    return Object.keys(sites).map(site => {
      const siteObject = sites[site];
      return { date: granularity, [site]: siteObject };
    });
  });
  return [].concat(...transformedData);
};

export default {
  singleDataset,
  multiDataset
};
