import React,{Component} from 'react';
import './App.css';
import Movie from './movie';

class App extends Component{
  
  //Life cycle
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          {
            title : "악인전",
            poster : "http://img.khan.co.kr/news/2019/05/06/l_2019050601000595800041521.jpg",
          },
          {
            title : "어벤져스 : 엔드게임",
            poster : "http://www.newstof.com/news/photo/201904/1522_4031_4842.jpg",
          },
          {
            title :"걸캅스",
            poster : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81759/81759_1000.jpg",
          },
          {
            title : "어떤 의뢰인",
            poster :"https://file.mk.co.kr/meet/thefact/2019/04/image_readtop_2019_217383_1750134_0.jpg"
          },
          {
            title : "배심원들",
            poster : "http://spnimage.edaily.co.kr/images/Photo/files/NP/S/2019/04/PS19040900062.jpg"
          }
        ]
      })
    },1000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie key={index} title={movie.title} poster={movie.poster}/>
    })
    return movies;
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  };
}

export default App;
