import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}


export const ListSlice = createSlice({
    name: 'list_movies',
    initialState,
    reducers: {

        addMovie: (state, action) => {
            let data = action.payload.data;
            const movieInList = state.value.find((value) => value._id === data._id);
            if (!movieInList) {
                state.value.push({
                    _id: data._id,
                    title: data.title, 
                    rated: data.rated
                });
            }
        },
        removeMovie: (state, action) => {
            let data = action.payload.data;
            const removeMovie = state.value.filter((value) => value._id !== data._id);
            state.value = removeMovie;
        },
    },
})

export const { addMovie, removeMovie } = ListSlice.actions

export default ListSlice.reducer