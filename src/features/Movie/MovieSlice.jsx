import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas:[],
  isLoading: true,
  error: null,
}

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getData (state, action) {
        return {
            ...state,
            datas: action.payload,
            isLoading: false,
            error:null
        }
    },
    getError (state, action) {
        return {
            ...state,
            error:action.payload,
            isLoading: false
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { getData, getError } =  MovieSlice.actions

export default MovieSlice.reducer