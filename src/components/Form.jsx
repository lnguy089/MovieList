// import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      chosen: {title: ''},
      bool: false,
      add: '',
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddClicker = this.handleAddClicker.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleAddClicker(event) {
    this.setState({add: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value !==  '')  {
      var truth = false;
      if(this.props.movies !== {}) {
        this.props.movies.map( (item, i) =>  {
          if(this.state.value === this.props.movies[i].title) {
            truth = true;
          }
        })
      }
      this.setState({chosen: {title: this.state.value}, bool: truth, value: ''},
      () =>{
        if (truth === false) {
          alert('Movie NOT found :(');
        } else {
          this.props.searchMovie([this.state.chosen]);
        }
      }
      // this.props.searchMovie([this.state.chosen);
      );
    } else if(this.state.add !== '') {
      this.props.addMovie({title: this.state.add, watched: false});
      this.setState({add: ''}, () => this.props.searchMovie(this.props.movies));
    }
    else {
      this.props.searchMovie(this.props.movies);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.add} onChange={this.handleAddClicker} placeholder='ADD SUMTHING' />
        <button>Add</button>
        <input value={this.state.value} onChange={this.handleChange} placeholder='Search'/>
        <button>Search Movie</button>
      </form>
    )
  }

}

export default Form
// <button onClick={ (event) => {
//   this.props.addMovie({title: this.state.add});
//   this.setState({add: ''});
//   }}>
//   Add</button>