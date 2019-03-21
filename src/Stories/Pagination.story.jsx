import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../Pagination';

class PaginationParent extends React.Component {
  state = { currentPage: 1, totalPages: 15 };

  handlePageChange = newPage => {
    this.setState({ currentPage: newPage });
  };

  render() {
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

storiesOf('Pagination', module).add('default', () => <PaginationParent />);
