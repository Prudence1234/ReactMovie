import React ,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    const [data ,setData]=useState([]);
    let {id} = useParams()
    console.log("Param is " + id)
     useEffect(() => {
     fetch('http://localhost:5002/api/v1/movies/id/' + id ) 
        .then((response) => response.json())
        .then((data) => {
           console.log(data)
           setData(data.movie);
        });
  }, []);

  return (
    <div>
       <div>
         <img src={data.poster}  />
         <div> 
            <small>{data.year}</small>
            <small> Rated: {data.rated}</small>
            <h4 >{data.title}</h4>
            <p>{data.fullplot}</p>
            <p>Director: {data.directors}</p>
        </div>
      </div>

    </div>
  )
  }

export default MovieInfo