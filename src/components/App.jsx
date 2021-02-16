import movies from '../defaultData.js';
import movieTitlesList from './movieTitlesList.js';
import MovieNames from './MovieNames.js';
import Form from './Form.js';
import Watched from './Watched.js';
import MovieList from './MovieNames.js';
class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      titles: [],
      choose: [],
      unwatchedList: [],
      watchedList: []
    };
  }

  chooseMovie(movie) {
    this.setState( {
      choose: movie
    })
  }
  addMovie(movie) {
    this.setState( {
      titles : [...this.state.titles, movie]
    })
  }
  addToWatched(movie) {
    this.setState( {
      watchedList: [...this.state.watchedList, movie]
    })
  }
  addToUnWatched(movie) {
    this.setState( {
      unwatchedList: [...this.state.unwatchedList, movie]
    })
  }

  render() {
    return (
    <h2 className="link-container">
      <Form movies={this.state.titles} searchMovie={this.chooseMovie.bind(this)} addMovie={this.addMovie.bind(this)}/>
      <div className ='ls'>MovieList</div>
      <Watched movies={this.state.choose} chooseMovies={this.chooseMovie.bind(this)} />
      <MovieList movieTitle={this.state.choose} addToWatched={this.addToWatched.bind(this)} addToUnWatched={this.addToUnWatched.bind(this)}/>
    </h2>
    );
  }
};
export default App;

//