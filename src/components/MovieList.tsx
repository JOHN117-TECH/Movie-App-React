import React from 'react';
import Movie from '../models/Movie';
const MovieList: React.FC<{
  movies: Movie[];
  onHandleFavourites: (movie: Movie) => void;
  component: () => any;
  onDetail?: (value: boolean) => any;
  movieDetail?: (movie: Movie) => void;
}> = ({ movies, onHandleFavourites, component, onDetail, movieDetail }) => {
  const Component = component;

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.Poster}
          className="image-container col d-flex justify-content-start m-3"
          onClick={() => movieDetail!(movie)}
        >
          <img src={movie.Poster} alt="movie" onClick={() => onDetail!(true)} />
          <div className="overlay" onClick={() => onHandleFavourites(movie)}>
            <Component />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
