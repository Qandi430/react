import React,{Component} from 'react';
import './App.css';
import Movie from './movie';

class App extends Component{
  
  //Life cycle
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie) =>{
      return <Movie 
      key={movie.id} 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      genres={movie.genres}
      synopsis={movie.synopsis}/>
    })
    return movies;
  }

   _getMovies = async () =>{
    const movies = await this._callApi();
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callApi = () =>{
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count&order_by=desc")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    const{movies} = this.state;
    return (
      <div className={movies ? "App":"App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  };
}

export default App;
