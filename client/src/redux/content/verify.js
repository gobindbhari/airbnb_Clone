import { createSlice } from '@reduxjs/toolkit'

export const VerifyUser = createSlice({
  name: 'VerifyUser',
  initialState: false,
  reducers: {
    setNotAllow: () => false,
    setAllow: () => true,   
  },
})

export const { setNotAllow, setAllow } = VerifyUser.actions

export default VerifyUser.reducer