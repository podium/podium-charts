import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  IconChevron
} from '@podiumhq/podium-ui';

const ChevronWrapper = styled.div`
  display: inline;
  svg {
    position: absolute;
    right: 24px;
    transition: 0.2s;
  }
`;

class ReportingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeColumn: 'totalConversations', sortDirection: 'desc' };
  }

  onSort = dir => {
    console.log(dir);
    //this.setState({sortDirection: dir})
  };

  render() {
    const { headers, data } = this.props;
    const { activeColumn, sortDirection } = this.state;

    return (
      <Table showBorders>
        <TableHeader>
          <TableRow>
            {headers.map(header => {
              const active = activeColumn === header.id;
              const sort = header.onSort && active && (
                <ChevronWrapper>
                  <IconChevron size="medium" direction="down" />
                </ChevronWrapper>
              );

              return (
                <TableHeaderCell
                  key={header.id}
                  active={active}
                  onClick={header.onSort || null}
                  sortDirection={header.onSort && sortDirection}
                  width={header.width}
                >
                  {/* Have to do || '' because storybook does not correctly render nulls */}
                  <div>
                    {header.content}
                    {sort || ''}
                  </div>
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={`row|${rowIndex}`}>
              {headers.map(header => (
                <TableCell
                  key={`cell|${rowIndex}|${header.id}`}
                  activeRow={rowIndex === 2}
                  activeColumn={header.id === activeColumn}
                  width={header.width}
                >
                  {row[header.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

ReportingTable.propTypes = {
  data: PropTypes.array,
  headers: PropTypes.array
};

export default ReportingTable;
