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
    this.showUW = this.showUW.bind(this);
    this.showW = this.showW.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }
  getMovies() {
    var arr = [];
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6e1ecf08722aad46043b9a2cd2f982ee&language=en-US&page=1')
    .then((response) => {
      response.data.results.map( (item, key) => {
          arr.push({
            id : item.id,
            title: item.original_title,
            date: item.release_date,
            picture: 'https://image.tmdb.org/t/p/w500' + item.poster_path
          })
        })

        this.setState({titles: arr, unwatchedList: arr}, () => {
          this.setState({choose: this.state.titles})
        });
        // https://image.tmdb.org/t/p/w500
      })
      .catch((err) => {
        console.log('could not get movies');
        console.log(err);
      })
  }
  sendMovies() {
    axios.post('/api/movies', this.state.choose)
    .then( (response) => {
      console.log('package DELIVERED');
    })
    .catch( (err) => {
      console.log('NOOOOOOO');
    })
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
    console.log(this.state.titles);
    var index = newArr.indexOf(this.state.unwatchedList[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({unwatchedList: newArr});
    }
  }
  removeFromWatchedArr(key) {
    var newArr = [...this.state.watchedList];
    var index = newArr.indexOf(this.state.watchedList[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({watchedList: newArr});
    }
  }
  showUW() {
    this.setState({choose: this.state.unwatchedList});
  }
  showW() {
    this.setState({choose: this.state.watchedList});
  }
  componentDidMount() {
    this.getMovies();
    this.sendMovies();
  }
  render() {
    return (
    <h2 className="link-container">
      <Form movies={this.state.titles} searchMovie={this.chooseMovie.bind(this)} addMovie={this.addMovie.bind(this)}/>
      <div className='ls'>MovieList</div>
      <button onClick={() => this.sendMovies.bind(this)}>SendMovies</button>
      <button onClick={() => this.showW()}>Watched</button>
      <button onClick={() => this.showUW()}>Unwatched</button>
      <MovieList movieTitle={this.state.choose} addToWatched={this.addToWatched.bind(this)} addToUnWatched={this.addToUnWatched.bind(this)} removeW={this.removeFromWatchedArr.bind(this)} removeUW={this.removeFromUnWatchedWArr.bind(this)} />
    </h2>
    );
  }
};
export default App;

//