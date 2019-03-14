import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableLoading, ToolTip, IconInfo, colors } from '@podiumhq/podium-ui';
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHeaderCell
} from './';

const MoreInfo = styled.div`
  position: absolute;
  left: 10px;
  top: 35%;
  color: ${colors.lightSteel};
  &&& {
    svg {
      fill: ${colors.lightSteel};
      position: initial;
    }
  }
`;

class ReportingTable extends Component {
  renderTableHeaders = () => {
    const { headers, showHeaders } = this.props;

    if (!showHeaders) {
      return null;
    }

    return (
      <TableRow>
        {headers &&
          headers.map((header, index) => {
            return (
              <TableHeaderCell key={header.id} width={header.width}>
                {header.tooltip && (
                  <MoreInfo>
                    <ToolTip position="top" type="arrow" tip={header.tooltip}>
                      <IconInfo size="small" />
                    </ToolTip>
                  </MoreInfo>
                )}
                <div>{header.content}</div>
              </TableHeaderCell>
            );
          })}
      </TableRow>
    );
  };

  renderTableBody = () => {
    const { data, dataComponents, headers } = this.props;

    return (
      data &&
      data.map((row, rowIndex) => {
        return (
          <TableRow key={`row|${rowIndex}`}>
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
    const { loading } = this.props;
    return loading ? (
      <TableLoading />
    ) : (
      <Table>
        <TableHeader>{this.renderTableHeaders()}</TableHeader>
        <TableBody>{this.renderTableBody()}</TableBody>
      </Table>
    );
  }
}

ReportingTable.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  dataComponents: PropTypes.object,
  focusRow: PropTypes.func,
  loading: PropTypes.bool,
  showHeaders: PropTypes.bool
};

ReportingTable.defaultProps = {
  dataComponents: {},
  showHeaders: true
};

export default ReportingTable;
