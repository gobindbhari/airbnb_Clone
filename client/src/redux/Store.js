import { configureStore } from '@reduxjs/toolkit'
import VerifyUserReducer  from './content/verify'

export const store = configureStore({
  reducer: {
    VerifyUser : VerifyUserReducer 
  },
})

