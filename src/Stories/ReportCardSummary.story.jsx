import React from 'react';
import { storiesOf } from '@storybook/react';
import formatters from '../Charts/utils/formatters';
import colors from '../Colors';
import { Chart, SummaryLine, ReportCard, ReportSummaryTitle } from '../';
import {
  WindowWidthMonitor,
  data,
  weightedAvgData,
  weightedAvgDataPrev,
  currData,
  prevData
} from './storyHelpers';
import { DefaultNotes } from './ReportCardSummaryHelpers';

storiesOf('Report Card Summary', module)
  .add(
    'Default',
    () => (
      <div style={{ width: '270px' }}>
        <ReportCard width="270px">
          <ReportSummaryTitle
            formatter={formatters.abbreviateNumber}
            dataKeys={['sms']}
            title="Inbound Leads"
            data={data}
            trendData={[prevData, currData]}
            aggregationOptions={{
              type: 'total',
              dataKeys: ['value']
            }}
          />
          <Chart data={data} height={100} hideGrid>
            <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
          </Chart>
        </ReportCard>
      </div>
    ),
    { notes: DefaultNotes }
  )
  .add('Average Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          trendData={[currData, prevData]}
          aggregationOptions={{
            type: 'avg',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100} hideGrid>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Weighted Average Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.roundToPlaces(1)}
          dataKeys={['sms']}
          title="Site Rating"
          data={weightedAvgData}
          trendData={[weightedAvgData, weightedAvgDataPrev]}
          aggregationOptions={{
            type: 'weightedAvg',
            dataKeys: ['dogs', 'cats'],
            options: { valueKey: 'cuteness', countKey: 'amount' }
          }}
        />
        <Chart data={weightedAvgData} height={100} hideGrid>
          <SummaryLine
            connectNulls
            dataKey="dogs.cuteness"
            color={colors.cobaltBlue}
          />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Prefer Downward Trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard>
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          preferDown
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'avg',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100} hideGrid>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('No change trend', () => (
    <div style={{ width: '270px' }}>
      <ReportCard>
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          preferDown
          trendData={[prevData, prevData]}
          aggregationOptions={{
            type: 'avg',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100} hideGrid>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))

  .add('Loading', () => (
    <div style={{ width: '270px' }}>
      <ReportCard loading>
        <ReportSummaryTitle
          formatter={formatters.humanizeDuration}
          dataKeys={['sms']}
          title="Median Response Time"
          data={data}
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100} hideGrid>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Long title', () => (
    <div style={{ width: '270px' }}>
      <ReportCard width="270px">
        <ReportSummaryTitle
          formatter={formatters.abbreviateNumber}
          dataKeys={['sms']}
          title="This title is very long, yes indeed"
          data={data}
          trendData={[prevData, currData]}
          aggregationOptions={{
            type: 'total',
            dataKeys: ['value']
          }}
        />
        <Chart data={data} height={100} hideGrid>
          <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
        </Chart>
      </ReportCard>
    </div>
  ))
  .add('Responsive metric size', () => (
    <div>
      <WindowWidthMonitor />

      <div style={{ width: '270px' }}>
        <h3>This will shrink at 1000px:</h3>
        <ReportCard width="270px">
          <ReportSummaryTitle
            formatter={formatters.abbreviateNumber}
            dataKeys={['sms']}
            title="This title is very long, yes indeed"
            data={data}
            trendData={[prevData, currData]}
            aggregationOptions={{
              type: 'total',
              dataKeys: ['value']
            }}
            smallWidth={1000}
          />
          <Chart data={data} height={100} hideGrid>
            <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
          </Chart>
        </ReportCard>
        <h3>This will not shrink:</h3>
        <ReportCard width="270px">
          <ReportSummaryTitle
            formatter={formatters.abbreviateNumber}
            dataKeys={['sms']}
            title="This title is very long, yes indeed"
            data={data}
            trendData={[prevData, currData]}
            aggregationOptions={{
              type: 'total',
              dataKeys: ['value']
            }}
          />
          <Chart data={data} height={100} hideGrid>
            <SummaryLine connectNulls dataKey="sms" color={colors.cobaltBlue} />
          </Chart>
        </ReportCard>
      </div>
    </div>
  ));
