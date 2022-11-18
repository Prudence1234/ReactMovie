import React ,{useEffect, useState} from 'react';
import './Mylist.css'

const Mylist = () => {
  const [data ,setData]=useState([]);

     useEffect(() => {
      fetch('http://localhost:5002/api/v1/movies/search?genre=Thriller') 
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
            setData(data.movies);
         });
   }, []);

return(
  <div className='scrol'>
   {data.map((props) => {
    return (
       <div key={props.id}  className="movie">
       <a><img src={props.poster} className="image"/></a>
       <p  >{props.genre}</p>
        <h4 >{props.title}</h4>
       </div>
       )
        })}
  </div>
)
}

export default Mylist
