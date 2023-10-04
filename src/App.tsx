import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';
import Movie from './models/Movie';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import DetailMovie from './components/DetailMovie';
function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favouritesMovies, setFavouritesMovies] = useState<Movie[]>([]);
  const [search, setSearchValue] = useState<string>('');
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const [error, setError] = useState<string>('');

  const getMovieRequest = async (search: string) => {
    const URL = `https://www.omdbapi.com/?s=${search}&apikey=29c40a66`;
    try {
      const response = await fetch(URL);

      const responseJson = await response.json();
      /* console.log(responseJson.Search); */
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }

      setError('');
    } catch (err) {
      setError('oh no, an error has occurred in the request ' + err);
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]);

  const addFavouriteMovie = (movie: Movie) => {
    if (!favouritesMovies.includes(movie)) {
      const newFavouriteLList = [...favouritesMovies, movie];
      setFavouritesMovies(newFavouriteLList);
    }
  };

  const removeFavouriteMovie = (movie: Movie) => {
    const newFavouriteLList = favouritesMovies.filter(
      (favouriteMovie) => favouriteMovie.imdbID !== movie.imdbID
    );
    setFavouritesMovies(newFavouriteLList);
  };

  if (error) {
    return <div className="container-fluid">{error}</div>;
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        {isDetail && <DetailMovie movie={movieDetail} />}
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox value={search} setSearch={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          onHandleFavourites={addFavouriteMovie}
          component={AddFavourites}
          onDetail={setIsDetail}
          movieDetail={setMovieDetail}
        />
      </div>
      <div className="row d-flex align-items-center ps-4 mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favouritesMovies}
          onHandleFavourites={removeFavouriteMovie}
          component={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
