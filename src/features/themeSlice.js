import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {primaryColor: "w3-green", secondaryColor: "w3-light-green", tertiaryColor: "w3-lime"};
const blueTheme = {primaryColor: "w3-blue", secondaryColor: "w3-aqua", tertiaryColor: "w3-pale-blue"};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeTheme: (state, action) => {
      if (action.payload){
        state.value = blueTheme;
      }
      else{
        state.value = initialStateValue
      }
    },
  },
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer