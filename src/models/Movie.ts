import Model from "../utils/Model";


export interface IMovie {
    birth_year: string,
    created: string,
    edited: string,
    eye_color: string
}

const Movie = Model((model: IMovie) => {
    const _movie = Object.assign({}, model);
  
    return {
      get birth_year() {
        return _movie.birth_year;
      },
      get created() {
        return _movie.created;
      },
      get edited() {
          return _movie.edited
      },
      get eye_color() {
        return _movie.eye_color;
      }
    };
  });
  
  export default Movie;