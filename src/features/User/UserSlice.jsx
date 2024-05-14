import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   login (state, action) {
    return {
      ...state,
      user: action.payload
    }
   },
   logout (state, action) {
    return {
      ...state,
      user: null
    }
   }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } =  UserSlice.actions

export default UserSlice.reducer