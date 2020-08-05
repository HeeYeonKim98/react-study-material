//app.js : main
import React, { Component } from "react";
import Movie from "./components/Movie";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  MovieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({
      movies: movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.MovieList();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((m) => (
              <Movie
                poster={m.medium_cover_image}
                title={m.title}
                year={m.year}
                summary={m.summary}
                genres={m.genres}
              />
            ))}
      </div>
    );
  }
}

//Movie.js : Movie component
import React from "react";
import "../css/Movie.css";

const Movie = ({ poster, title, year, summary, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div>
        <h2>{title}</h2>
        <h5>{year}</h5>
        <p>{summary.slice(0, 200)} . . . .</p>
        <ul>
          {genres.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
