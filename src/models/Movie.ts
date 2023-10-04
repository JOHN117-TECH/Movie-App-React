class Movie {
  /* id?: string; */
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  constructor(
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    poster: string
  ) {
    /* this.id = new Date().toISOString(); */
    this.Title = Title;
    this.Year = Year;
    this.imdbID = imdbID;
    this.Type = Type;
    this.Poster = poster;
  }
}

export default Movie;
