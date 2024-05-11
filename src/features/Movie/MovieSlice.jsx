import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas:[], // get  multiple datas
  isFetching: true,
  error: null,
  data:{} // get data a single data
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getDatas (state, action) {
        return {
            ...state,
            datas: action.payload,
            isFetching: false,
            error:null
        }
    },
    getError (state, action) {
        return {
            ...state,
            error:action.payload,
            isLoading: false
        }
    },
    getData (state, action) {
        return {
            ...state,
            data:action.payload,
            isLoading: false
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { getDatas, getError,getData } =  MovieSlice.actions

export default MovieSlice.reducer