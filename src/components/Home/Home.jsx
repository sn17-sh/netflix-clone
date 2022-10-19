import Row from '../Row/row';
import axios from 'axios';
import {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {BsPlayFill} from 'react-icons/bs'
import {IoMdAdd} from 'react-icons/io'

const apiKey = "5419c8c5c0ff32fd7c5cbafafe53791d";
const url = "https://api.themoviedb.org/3";
const popular = "popular";
const upcoming = "upcoming";
const toprated = "top_rated";
const nowplaying = "now_playing";
const imgUrl ="https://image.tmdb.org/t/p/w500";



const Home = () => {
  const [nowPlayingArr, setNowPlaying] = useState([]);
  const [popularArr, setPopular] = useState([]);
  const [upComingArr, setUpComing] = useState([]);
  const [topRatedArr, setTopRated] = useState([]);
  const [genresArr, setGenres] = useState([]);
    

    useEffect(() => {
      const nowPlayingMovies = async () => {
      const {
        data: {results}
            } = await axios.get(`${url}/movie/${nowplaying}?api_key=${apiKey}`);
            setNowPlaying(results);
    };
      
    const popularMovies = async (j) => {
        const {
          data: {results}
              } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
              setPopular(results);
        
      };

      const upComingMovies = async () => {
        const {
          data: {results}
              } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
              setUpComing(results);
        
      };

      const topRatedMovies = async () => {
        const {
          data: {results}
              } = await axios.get(`${url}/movie/${toprated}?api_key=${apiKey}`);
              setTopRated(results);
        
      };
       
      const genreOfMovies = async () => {
        const {
          data: {genres}
              } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
              setGenres(genres);
        
      };
      

    
    nowPlayingMovies()
    popularMovies();
    upComingMovies();
    topRatedMovies();
    genreOfMovies();

  }, []);
  

  return (
    <section className="home">
    <div className="banner" style={{
    backgroundImage: popularArr[0] ? `url(${`${imgUrl}/${
      
      popularArr[7].poster_path}`})` : "rgb(16, 16, 16)"}}>
     
    
       {popularArr[0] && <h2 className="title">{popularArr[7].title}</h2>}
  
       {popularArr[0] && <p className="description">{popularArr[7].overview}</p>}
      
      <div className="button2">
      <button><BsPlayFill/>Play</button>
      <button>My List <IoMdAdd/></button>
      </div>
     </div>
     
    
        
        
    
        
  
      <Row title={"Now Playing"} arr={nowPlayingArr}/>
      <Row title={"Popular on Netflix"} arr={popularArr}/>
      <Row title={"Top Rated Movies"} arr={topRatedArr}/>
      <Row title={"Upcoming Movies"} arr={upComingArr}/>
      
      <div className="generBox">
        {
          genresArr.map((item,index) => {
             return (
               <Link key={index} to={`/genre/${item.id}`}>{item.name}</Link>
             )
          })
        }
      </div>
      
    </section> 
      )
}

export default Home;