// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// const Mylist = () => {
//    const [data, setData] = useState([]);

//    let { id } = useParams()
//    console.log("Param is " + id)
//    const addMovie = async (movie) => {
//       let response = await fetch('http://localhost:5002/api/v1/movies/id/' + id, {
//          method: 'POST',
//          body: JSON.stringify({
//             movie,
//          }),
//          headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//          },
//       });
//       let data = await response.json();
//       setData((movie) => [data, ...movie]);
//    };
//    const handleMylist = (e) => {
//       e.preventDefault();
//       addMovie(movie);
//     };

//   return (
//     <div>{handleMylist}</div>
//   )
// }

// export default Mylist
// src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const listSlice = createSlice({
//   name: 'list',
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     addToList: (state, action) => {
//       const movieInList = state.list.find((movie) => movie.id === action.payload.id);
//       if (movieInList ) {
//          movieInList.value++;
//       } else {
//         state.list.push({ ...action.payload, value: 1 });
//       }
//     },
//     increment: (state, action) => {
//       const movie = state.list.find((movie) => movie.id === action.payload);
//       movie.value++;
//     },
//     decrement: (state, action) => {
//       const movie = state.cart.find((movie) => movie.id === action.payload);
//       if (movie.value === 1) {
//         movie.value = 1
//       } else {
//         movie.value--;
//       }
//     },
//     removeMovie: (state, action) => {
//       const removeMovie = state.list.filter((movie) => movie.id !== action.payload);
//       state.list = removeMovie;
//     },
//   },
// });

// export const listReducer = listSlice.reducer;
// export  const {
//   addToList,
//   increment,
//   decrement,
//   removeMovie,
// } = listSlice.actions;


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const MylistSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log(`hello ${state.value}`);
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = MylistSlice.actions

export default MylistSlice.reducer