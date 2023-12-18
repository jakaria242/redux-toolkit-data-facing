import { createSlice } from '@reduxjs/toolkit'

export const addSlice = createSlice({
  name: 'add',
  initialState: { price: "",},
  reducers: {
    add: (state, action) => {
        state.price = action.payload;
    },
  },
})


export const { add } = addSlice.actions

export default addSlice.reducer