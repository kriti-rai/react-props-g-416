import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <h1>{ this.props.title }</h1>
        <img src ={ this.props.poster} alt = {this.props.title} />
        <small>Genres: { this.props.genres.join(', ') }</small>
      </div>
    )
  }
};

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render (
  <MovieCard
  title = "Mad Max: Fury Road"
  poster = "https://media.wired.com/photos/5937272109f4ce09698efb93/master/w_825,c_limit/MadMaxFuryRoad-247-ft.jpg"
  genres = { madMaxGenres }/>,
  document.getElementById('root')
);
