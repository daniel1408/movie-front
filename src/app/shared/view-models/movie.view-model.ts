export class MovieViewModel {

  public id: string;
  public Title: string;
  public Year: string;
  public Genre: string;
  public Director: string;
  public Writer: string;
  public Actors: string;
  public Plot: string;
  public Language: string;
  public Awards: string;
  public Country: string;
  public Poster: string;
  public imdbRating: string;
  public userOption: string;

  constructor(movie: any) {

    this.id = (movie.id !== undefined) ? movie.id : null;
    this.Title = (movie.Title !== undefined) ? movie.Title : null;
    this.Year = (movie.Year !== undefined) ? movie.Year : null;
    this.Genre = (movie.Genre !== undefined) ? movie.Genre : null;
    this.Director = (movie.Director !== undefined) ? movie.Director : null;
    this.Writer = (movie.Writer !== undefined) ? movie.Writer : null;
    this.Actors = (movie.Actors !== undefined) ? movie.Actors : null;
    this.Plot = (movie.Plot !== undefined) ? movie.Plot : null;
    this.Language = (movie.Language !== undefined) ? movie.Language : null;
    this.Awards = (movie.Awards !== undefined) ? movie.Awards : null;
    this.Country = (movie.Country !== undefined) ? movie.Country : null;
    this.Poster = (movie.Poster !== undefined) ? movie.Poster : null;
    this.imdbRating = (movie.imdbRating !== undefined) ? movie.imdbRating : null;
    this.userOption = (movie.userOption !== undefined) ? movie.userOption : null;
  }
}
