// import { createSlice, configureStore} from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//     name:'counter',
//     initialState:{
//         value:0
//     },
//     reducers:{
//         incremented:state=>{
//             state.value+=1
//         },
//         decremented:state=>{
//             state.value-=1
//         }
//     },
// })

// const movieSlice = createSlice({
//     name:'movies_cart',
//     initialState:{
//         value:[]
//     },
//     reducers:{
//         addToCart:(state, movie)=>{
//             state.value.push(movie)
//         },
//         removeFromCart:(state, index_of_movie_to_remove)=>{
//             state.value.slice(index_of_movie_to_remove, 1)
//         }
//     },
// })

// export const {incremented,decremented} = counterSlice.actions
// export const store = configureStore({
//     reducer:counterSlice.reducer
// })

// src/redux/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cartSlice";

// export const store = configureStore({
//   reducer: cartReducer
// })
import { configureStore } from '@reduxjs/toolkit'
import MylistReducer from './MylistSlice'
import ListReducer from "./ListSlice"

export const store = configureStore({
  reducer: {
    counter: MylistReducer,
    list_movies: ListReducer
  },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

