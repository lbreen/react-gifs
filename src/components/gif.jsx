import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;

    if (id === '') {
      return (<div />);
    }
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
