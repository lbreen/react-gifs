import React, { Component } from 'react';
import giphy from 'giphy-api';
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

const GIPHY_API_KEY = 'dNZCxfONWMCYVXCVWLWGqhgYAXBowvQW';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ['xT9IgDEI1iZyb2wqo8', 'xT9IgDEI1iZyb2wqo8', 'xT9IgDEI1iZyb2wqo8', 'xT9IgDEI1iZyb2wqo8'],
      selectedGifId: 'xT9IgDEI1iZyb2wqo8'
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState(
          { gifs: result.data }
        );
      });
  }


  render() {
    return (
      <div>
        <div className="left-panel">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif className="gif" id={this.state.selectedGifId} />
          </div>

        </div>
        <div className="right-panel">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
