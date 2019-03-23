import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps) {
    const { id } = this.props;

    return nextProps.id !== id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;

    if (id === '') {
      return (<div />);
    }
    console.log("rendering");
    const src = `https://media2.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} className="gif" alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
