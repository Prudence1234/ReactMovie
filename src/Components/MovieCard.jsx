import React, { useEffect, useState } from 'react';
import { Link, Routes,Route, Router } from "react-router-dom";

import './MovieCard.css'
import StarRating from './StarRating';
import MovieInfo from './MovieInfo'


// import { useNavigate } from 'react-router-dom'

const MovieCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/api/v1/movies/search?genre=Comedy')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.movies);
      });
  }, []);
  //   let to_five = [...Array(5).keys()]
  //   const getAPI = async () => {
  //     const res = await fetch('http://localhost:5002/api/v1/movies/search?genre=Comedy');
  //     if (res.ok) {
  //       const data = await res.json();

  //       console.log(data);
  //   }
  // };

  // getAPI();
  const scrollToEnd = () => {
    document.getElementById(
      'scroll_category_listing',
    ).scrollLeft += 1000
  }

  const scrollToStart = () => {
    document.getElementById(
      'scroll_category_listing',
    ).scrollLeft -= 1000
  }

  // const getMovieInfo = (id) => {
  //   var movieLink = "/MovieInfo" + id ;
  //   console.log("Movie info full link" + movieLink);
  //   <Link to={` ${movieLink}`} > </Link> 
  //   return(
  //     movieLink
  //   )

  //   }

  return (
    <div className='scroll-container'>
      <div className='scroll' id='scroll_category_listing'>
        <div className='float-button left-button' onClick={scrollToStart}>
          <i className="fa fa-light fa-chevron-left"></i>
        </div>
        <div className='float-button right-button' onClick={scrollToEnd}>
          <i className="fa fa-light fa-chevron-right"></i>
        </div>
        {data.map((props, index) => {
          return (

            <div key={index} className="movieCard" >
                <Link to={`/id/${props._id}`} > 
                    <img src={props.poster} className="movieImage"/>
                </Link>  
                 <div>
                 <h4 >{props.title}</h4>
                 <StarRating rating={props.tomatoes.viewer.rating} />
                </div>
               </div>
            


          )
        })}
      </div>
    </div>
  )
}

export default MovieCard
