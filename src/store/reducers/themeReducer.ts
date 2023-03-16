import { darkTheme, lightTheme } from "../types/themeType";

export const storedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';

export const inintialState = {
  currentTheme: storedTheme,
}

export const themeReducer = (state=inintialState, action: {type: string}) => {
  switch (action.type) {
    case darkTheme:
      return {...state, currentTheme: 'dark'}
  
    case lightTheme:
      return {...state, currentTheme: 'light'}
  
    default:
      return state
  }
}