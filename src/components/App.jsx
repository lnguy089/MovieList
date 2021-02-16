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
      titles : [...this.state.titles, movie], unwatchedList: [...this.state.unwatchedList, movie]
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
  removeFromUnWatchedWArr(key) {
    var newArr = [...this.state.unwatchedList];
    var index = newArr.indexOf(this.state.titles[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({unwatchedList: newArr});
    }
  }
  removeFromWatchedArr(key) {
    var newArr = [...this.state.watchedList];
    var index = newArr.indexOf(this.state.titles[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({watchedList: newArr});
    }
  }

  render() {
    return (
    <h2 className="link-container">
      <Form movies={this.state.titles} searchMovie={this.chooseMovie.bind(this)} addMovie={this.addMovie.bind(this)}/>
      <div className ='ls'>MovieList</div>
      <button>Watched</button> <button onClick={() => showUW}>Unwatched</button>
      <MovieList movieTitle={this.state.choose} addToWatched={this.addToWatched.bind(this)} addToUnWatched={this.addToUnWatched.bind(this)} removeW={this.removeFromWatchedArr.bind(this)} removeUW={this.removeFromUnWatchedWArr.bind(this)} />
    </h2>
    );
  }
};
export default App;

//