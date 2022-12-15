import { createSlice } from '@reduxjs/toolkit'
import { Movie } from'../types';


const initialState = {
    value: [],
    
}

export const ListSlice  = createSlice({
    name: 'list_movies',
    initialState,
    reducers: {

        addMovie: (state, action) => {
            let data = action.payload.data as Movie;
            let input:Movie = {
                _id: data._id,
                title: data.title, 
                rated: data.rated,
                poster: data.poster, 
                genre: data.genre, 
                tomatoes: data.tomatoes,
                year:data.year,
                directors: data.directors,
                fullplot: data.fullplot
            }
            const movieInList = (state.value as Movie[]).find((value) => value._id === data._id);
            if (!movieInList) {
                (state.value as Movie[]).push(input);
            }
        },
        removeMovie: (state, action) => {
            let data = action.payload.data;
            const removeMovie: any = (state.value as Movie[]).filter((value) => value._id !== data._id);
            state.value = removeMovie;
        },
    },
})

export const { addMovie, removeMovie } = ListSlice.actions

export default ListSlice.reducer