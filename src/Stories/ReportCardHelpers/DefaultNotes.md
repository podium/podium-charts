# Report Card Summary
This component is a much smaller view of the report card that is meant to show as a high level overview. There are a few implementation items that differentiate these cards from others. 

## Report Card Props
You should use the `ReportCard` wrapper component and specify a `width` prop. 

```jsx
  <ReportCard width="270px">
  </ReportCard>
``` 

## `ReportCardSummaryTitle`
This is an entirely separate component that renders trend icons, tooltip helpers, and other summary-specific items. Please review the PropTypes for further documentation on the additional props.

### Trend Calculations
The trend arrow is calculated automatically based on data that is passed in through the `trendData` prop. This prop takes an array of 2 ordered datasets - `previousComparisonData` and `currentComparisonData`. By default, downward trends show as negative. You can use the `preferDownwardTrend` prop to correct this. 

### Aggregations 
The data displayed in the title is a result of an aggregation. This agg is calculated by passing in the `aggregationOptions` prop, which is an object containing the configurations for the agg. You will also need to add the `dataKeys` to Currently, the supported agg types are:

**total**

Total or sum of the data set. 

```js
aggregationOptions = {
  type: 'total',
  dataKeys: ['value']
}
``` 

**avg**

Average value of the data set. 

```js
aggregationOptions = {
  type: 'total',
  dataKeys: ['value']
}
``` 

**weightedAvg**

Weighterd Average value of the data set. This requires an additional config specifying which fields are treated as the value and count.

```js
aggregationOptions = {
  type: 'weightedAvg',
  dataKeys: ['dogs', 'cats'],
  options: { valueKey: 'cuteness', countKey: 'amount' }
}
``` 

## Chart
The normal chart component is used, but it is formatted slightly you adjust for size. The standard configuration for this is also to remove the axes and cartesian grid lines from the chart. The grid lines can be hidden by using the `hideGrid` prop, and axes are just left out of the implementation altogether.

```jsx
<Chart height={100} hideGrid ...>
  ...
</Chart>
``` 


