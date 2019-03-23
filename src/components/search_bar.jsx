import React, { Component } from 'react';

class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleUpdate = (event) => {
    const { searchFunction } = this.props;

    searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
