import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieInfo.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeMovie, addMovie } from '../redux/ListSlice';
import { Movie } from '../types';
import { RootState } from '../redux/Store';

const MovieInfo = () => {
  const [data, setData] = useState<Movie>();
  // const [mylist, setMylist] = useState ([]);
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen((prev) => !prev);
  };

  const Mylist = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  let { id } = useParams()
  useEffect(() => {
    fetch('http://localhost:5002/api/v1/movies/id/' + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.movie);
      });
  }, []);

  //     const addMovie = async (movie) => {
  //     let response = await fetch('http://localhost:5002/api/v1/movies/id/'+id, {
  //        method: 'POST',
  //        body: JSON.stringify({
  //          movie
  //        }),
  //        headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //        },
  //     });
  //     let data = await response.json();
  //     setMylist('');
  //  };


  return (
    <div>
      <div>
        {data == null ?
          <span></span>
          :
          <div className='info'>
            <img src={data.poster} className='infoposter' />
            <div className='flex'>
              <h4 >{data!.title}</h4>
              <small>{data!.year}</small>
              <br />
              <small> Rated: {data!.rated}</small>
              <p>{data!.fullplot}</p>
              <p>Director: {data!.directors}</p>
              {data!.tomatoes && (
                <a href={data!.tomatoes.website} target="_blank"> <button><i className="fa-sharp fa-solid fa-play"></i> <br />Play</button></a>
              )
              }
              <button aria-label="Increment value"
                onClick={() => dispatch(addMovie({ data: data }))}> <i className="fa-regular fa-plus"></i> <br />My List </button>

              <button aria-label="Decrement value"
                onClick={() => dispatch(removeMovie(id))}>Remove from Mylist</button>
            </div>
          </div>
        }
      </div>

    </div>
  )
}

export default MovieInfo