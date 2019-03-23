import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

const GIPHY_API_KEY = 'NKt58hFFV8cXMrrcQTx3NroIGYBrAh9j';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ''
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

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-panel">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-panel">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
