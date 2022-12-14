import React ,{useEffect, useState} from 'react';
import './MovieCard.css'
import StarRating from './StarRating';
import { Movie } from '../types';

const Drama = () => {
  const [data ,setData]=useState<Movie[]>([]);

     useEffect(() => {
      fetch('http://localhost:5002/api/v1/movies/search?genre=Drama') 
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            setData(data.movies);
         });
   }, []);

return(
  <div>
   {data.map((props, index) => {
    return (
       <div key={index}  className="movieCard">
       <a><img src={props.poster} className="movieImage"/></a>
       <p  className='movieGenre'>{props.genre}</p>
        <h4 >{props.title}</h4>
        <StarRating rating={props.tomatoes.viewer.rating}/>
       </div>
       )
        })}
  </div>
)
}

export default Drama
