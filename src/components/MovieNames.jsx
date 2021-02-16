import MovieTitlesList from './movieTitlesList.js';
var MovieNames = (props) => (
  props.movieTitle.map( (item, i) => {
    return {item} ? <MovieTitlesList item={item} key={i} num={i} addToUWArr={props.addToUWArr} addToWArr={props.addToWatched} addToUWArr={props.addToUnWatched} /> : <li></li>
  })
);

export default MovieNames;