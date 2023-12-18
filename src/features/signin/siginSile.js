


import { createSlice } from '@reduxjs/toolkit'

export const signinSlice = createSlice({
  name: 'signin',
  initialState: { 
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  },
  reducers: {
    addFirstNmae: (state, action) => {
        state.firstname += action.payload;
    },
    addLastName: (state, action) => {
        state.lastname += action.payload;
    },
    addEmail: (state, action) => {
        state.email += action.payload;
    },
    addPassword: (state, action) => {
        state.password += action.payload;
    },
  },
})


export const { addFirstNmae, addLastName, addEmail, addPassword  } = signinSlice.actions

export default signinSlice.reducer