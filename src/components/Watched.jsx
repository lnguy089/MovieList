import MovieNames from './MovieNames.js';
class Watched extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedList:  [],
      unwatchedList: [],
      currVid: [],
    }

    this.addToUWArr = this.addToUWArr.bind(this);
    this.addToWArr = this.addToWArr.bind(this);
    this.removeFromUNWArr = this.removeFromUNWArr.bind(this);
    this.removeFromWArr = this.removeFromWArr.bind(this);

  }

  addToWArr(newObject) {
    this.setState({
      watchedList: [...this.state.watchedList, newObject]
    });
  }
  removeFromWArr(key) {
    var newArr = this.state.watchedList;
    var index = newArr.indexOf(array[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({watchedList: newArr});
    }
  }
  addToUWArr(objectItem) {
    this.setState( {
      currVid: [...this.state.unwatchedList ,objectItem]
    });
  }
  removeFromUNWArr(key) {
    var newArr = this.state.unwatchedList;
    var index = newArr.indexOf(array[key]);
    if (index !== -1) {
      newArr.splice(index, 1);
      this.setState({unwatchedList: newArr});
    }
  }
  componentDidUpdate(prevProps) {
    if(this.props.movies !== prevProps.movies) {
      this.setState({unwatchedList: this.props.movies});
    }
  }

  render() {
      return (
    <form>
      <button onClick= {
        (event) => {
        event.preventDefault();
        this.props.chooseMovies(this.state.watchedList);
        }} >watched</button>
      <button onClick={ (event) => {
      event.preventDefault();
      // this.setState({currVid: this.state.unwatchedList})}
      this.props.chooseMovies(this.state.unwatchedList);
      }}>unwatched</button>
      <MovieNames movieTitle={this.state.currVid} removefromUW={this.removeFromUWArr} addToUWArr={this.addToUWArr.bind(this)} addToWArr={this.addToUWArr.bind(this)}/>
    </form>
      )
  }

}

export default Watched;