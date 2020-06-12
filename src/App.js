import React from 'react';
import Search from './Search';
import GifContainer from './GifContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  updateSearch = (search) => {
    this.searchGif(search)
    this.setState({ search: search }) 
  }

  async searchGif(search) {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=d28Yx518Ng4HXcpbTN5tyNZt0HYQ2sGn&limit=16`)
        const json = await res.json();
        this.setState({ results: json.data })
    } catch (err) {
        console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Find your favorite GIFS</h1>
        <Search updateSearch={this.updateSearch} />
        { this.state.search && <p>search results for {this.state.search}</p> }
        <GifContainer gifList={this.state.results} />
        <div className="footer">Website created with GIPHY by Cliff, 2020</div>
      </div>
    );
  }
}

export default App;
