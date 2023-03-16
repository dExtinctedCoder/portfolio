import { combineReducers } from '@reduxjs/toolkit'
import { menuReducer } from './reducers/menuReducer'
import { themeReducer } from './reducers/themeReducer'

export const rootReducer = combineReducers({
  ThemeReducer: themeReducer,
  MenuReducer: menuReducer
})

export type RootState = ReturnType<typeof rootReducer>