import React, { Suspense, lazy } from 'react';
// import { Rectangle as RechartsRectangle } from 'recharts';
import _ from 'lodash';

const RechartsRectangle = lazy(() => import('./vendor/RechartsRectangle'));

const calculateRadius = width => {
  const radius = Math.floor(width / 8);
  return [radius, radius, 0, 0];
};

export default function Rectangle(props) {
  const { stackPosition, stackId, width, payload, dataKey } = props;
  const stackOrder = stackPosition[stackId];

  if (!stackOrder)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RechartsRectangle {...props} radius={calculateRadius(width)} />
      </Suspense>
    );

  const renderedBars = _.filter(stackOrder, bar => {
    return !!payload[bar.dataKey];
  });

  if (!renderedBars.length)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RechartsRectangle {...props} />
      </Suspense>
    );

  const isTopBar = renderedBars[renderedBars.length - 1].dataKey === dataKey;
  if (isTopBar)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RechartsRectangle {...props} radius={calculateRadius(width)} />
      </Suspense>
    );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RechartsRectangle {...props} />
    </Suspense>
  );
}
