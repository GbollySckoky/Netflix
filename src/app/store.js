import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from '../features/Movie/MovieSlice'

export const store = configureStore({
  reducer: {
   MovieSlice: MovieSlice
  },
})