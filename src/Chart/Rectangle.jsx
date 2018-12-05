import React from 'react';
import {
  Rectangle as RechartsRectangle
} from 'recharts';
import _ from 'lodash';

const calculateRadius = (width) => {
  const radius = Math.floor(width / 8);
  return [radius, radius, 0, 0]
}

export default function Rectangle(props) {
  const { stackPosition, stackId, width, payload, dataKey } = props;
  const stackOrder = stackPosition[stackId];

  if (!stackOrder) return <RechartsRectangle {...props} radius={calculateRadius(width)} />

  const renderedBars = _.filter(stackOrder, (bar) => {
    return !!payload[bar.dataKey]
  })

  const isTopBar = renderedBars[renderedBars.length - 1].dataKey === dataKey
  
  if (renderedBars.length === 0) return null;
  if (isTopBar) return <RechartsRectangle {...props} radius={calculateRadius(width)} />;
  return (<RechartsRectangle {...props} />)
}

