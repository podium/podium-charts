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
                      <ToolTip position="top" type="arrow" tip={header.tooltip}>
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
