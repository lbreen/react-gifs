import React, { Component } from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import SearchBar from './search_bar';

const GIPHY_API_KEY = 'dNZCxfONWMCYVXCVWLWGqhgYAXBowvQW';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  render() {
    return (
      <div>
        <div className="left-panel">
          <SearchBar />
          <div className="selected-gif">
            <Gif className="gif" id={this.state.selectedGifId} />
          </div>

        </div>
        <div className="right-panel" />
      </div>
    );
  }
}

export default App;
