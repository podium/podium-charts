import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';

const { mystic, black, mineShaft, white } = colors;
const activeColumnBackgroundColor = '#F6F7F8';
const GRAPHIK = 'Graphik, Helvetica, sans-serif';

export const TableHeaderCellWrapper = styled.th`
  color: ${black};
  position: relative;
  font-weight: 500;
  text-align: left;
  padding: 8px 32px 8px 32px;
  height: 56px;

  ${({ active }) =>
    active && `background-color: ${activeColumnBackgroundColor};`};

  ${({ width }) => width && `min-width: ${width}px`};

  ${({ sortDirection }) =>
    sortDirection &&
    ` cursor: pointer;
      position: relative;
      align-items: center;
      cursor: pointer;
      user-select: none;
    `};
`;

const borders = `
  > thead {
    border-bottom: solid 1px ${mystic};

    > tr {
      :not(:last-child) {
        border-bottom: 1px solid ${mystic};
      }
      > th {
        :first-child {
          border-right: 1px solid ${mystic};
        }
      }
    }
  }

  > tbody {
    > tr {
      :not(:last-child) {
        border-bottom: 1px solid ${mystic};
      }
      > td {
				:first-child {
					border-right: 1px solid ${mystic};
				}
      }
    }
  }
`;

export const TableWrapper = styled.table`
  width: 100%;
  font-family: ${GRAPHIK};
  font-size: 12px;
  border-collapse: collapse;
  ${borders}
`;

export const TableRowWrapper = styled.tr``;

export const TableHeaderWrapper = styled.thead``;

export const TableCellWrapper = styled.td`
  color: ${mineShaft};
  font-weight: normal;
  padding: 0 32px;
  height: 56px;

  ${({ width }) => width && `min-width: ${width}`};
`;

export const TableBodyWrapper = styled.tbody``;

export const TableLoadingWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

export const TableLoadingWhitespace = styled.div`
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  background-color: ${white};
  left: ${({ left }) => (left ? `${left}` : '0')}px;
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : '0')}px;
`;
