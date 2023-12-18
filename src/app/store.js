import { configureStore } from '@reduxjs/toolkit'
import addReducer from '../features/add/addSlice'
import siginReducer from '../features/signin/siginSile'

export default configureStore({
  reducer: {
    add: addReducer,
    signin : siginReducer,
  },
})