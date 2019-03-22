import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const id = this.props.id;

    if (id === '') {
      return (<div/>)
    }
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
