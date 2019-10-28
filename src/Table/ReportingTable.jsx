import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ToolTip, IconInfo, colors } from '@podiumhq/podium-ui';
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHeaderCell
} from './';

const pulsate = keyframes`
	to { background-position: -200% center; }
`;

const BodyGhost = styled.div`
  height: 12px;
  width: ${({ width }) => width};
  margin: 8px 0;
  background: ${colors.mystic};
  border-radius: 4px;
  background: linear-gradient(
    -90deg,
    rgba(232, 233, 236, 0.3) 0%,
    ${colors.mystic} 100%
  );

  animation: ${pulsate} 1.5s linear;
  -webkit-animation: ${pulsate} 1.5s linear;
  -webkit-animation-iteration-count: infinite;

  background-size: 200% auto;
  background-clip: text;
`;

const MoreInfo = styled.span`
  margin-left: 4px;
  color: ${colors.lightSteel};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &&& {
    svg {
      fill: ${colors.lightSteel};
      position: initial;
    }
  }
`;

const HeaderData = styled.div`
  display: flex;
  align-items: center;
`;

class ReportingTable extends Component {
  renderTableHeaders = () => {
    const { headers } = this.props;

    return (
      <TableRow>
        {headers &&
          headers.map((header, index) => {
            return (
              <TableHeaderCell key={header.id} width={header.width}>
                <HeaderData>
                  <span>{header.content}</span>
                  {header.tooltip && (
                    <MoreInfo>
                      <ToolTip
                        position="bottom"
                        type="arrow"
                        tip={header.tooltip}
                      >
                        <IconInfo size="small" />
                      </ToolTip>
                    </MoreInfo>
                  )}
                </HeaderData>
              </TableHeaderCell>
            );
          })}
      </TableRow>
    );
  };

  renderLoadingBody = () => {
    const { headers } = this.props;

    return [...new Array(7)].map((row, rowIndex) => {
      const ghostWidth = `${Math.floor(Math.random() * 50) + 20}%`;
      return (
        <TableRow key={`row|${rowIndex}`}>
          {headers.map((header, headerIndex) => {
            return (
              <TableCell
                key={`cell|${rowIndex}|${headerIndex}`}
                width={header.width}
              >
                <BodyGhost width={ghostWidth} />
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  renderTableBody = () => {
    const {
      data,
      dataComponents,
      headers,
      onRowClick,
      onRowHoverColor,
      loading
    } = this.props;

    if (loading) return this.renderLoadingBody();

    return (
      data &&
      data.map((row, rowIndex) => {
        return (
          <TableRow
            key={`row|${rowIndex}`}
            onRowClick={() => onRowClick && onRowClick(row)}
            rowClickable={onRowClick != null}
            hoverColor={onRowHoverColor}
          >
            {headers.map((header, headerIndex) => {
              const tableCellComponent = dataComponents[header.id];
              const Component =
                tableCellComponent &&
                React.cloneElement(tableCellComponent, { rowData: row });
              return (
                <TableCell
                  key={`cell|${rowIndex}|${headerIndex}`}
                  width={header.width}
                >
                  {Component || row[header.id]}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })
    );
  };

  render() {
    return (
      <Table>
        <TableHeader>{this.renderTableHeaders()}</TableHeader>
        <TableBody>{this.renderTableBody()}</TableBody>
      </Table>
    );
  }
}

ReportingTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataComponents: PropTypes.object,
  loading: PropTypes.bool
};

ReportingTable.defaultProps = {
  dataComponents: {},
  loading: false,
  data: [],
  headers: []
};

export default ReportingTable;
