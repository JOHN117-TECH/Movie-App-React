import React from 'react';
import Movie from '../models/Movie';

const DetailMovie: React.FC<{ movie: Movie | undefined }> = ({ movie }) => {
  return (
    <div className="row align-items-start pt-5">
      <div className="col d-flex justify-content-center">
        <img src={movie?.Poster} style={{width:'12rem'}} alt="" />
      </div>
      <div className="col d-flex flex-column justify-content-center">
        <span className='pt-5'>Title: {movie?.Title}</span>
        <span className='pt-5'>Type: {movie?.Type}</span>
        <span className='pt-5'>Year: {movie?.Year}</span>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default DetailMovie;
