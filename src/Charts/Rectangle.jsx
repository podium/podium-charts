import React from 'react';
import { Rectangle as RechartsRectangle } from 'recharts';

const calculateRadius = width => {
  const radius = Math.floor(width / 8);
  return [radius, radius, 0, 0];
};

export default function Rectangle(props) {
  const { stackPosition, stackId, width, payload, dataKey } = props;
  const stackOrder = stackPosition[stackId];

  if (!stackOrder)
    return <RechartsRectangle {...props} radius={calculateRadius(width)} />;

  const renderedBars = stackOrder.filter(bar => {
    return !!payload[bar.dataKey];
  });

  if (!renderedBars.length) return <RechartsRectangle {...props} />;

  const isTopBar = renderedBars[0].dataKey === dataKey;
  if (isTopBar)
    return <RechartsRectangle {...props} radius={calculateRadius(width)} />;
  return <RechartsRectangle {...props} />;
}
