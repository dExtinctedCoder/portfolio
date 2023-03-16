import { closeMenu, toggleMenu } from "../types/menuType";

export const inintialState = {
  menuState: false,
}

export const menuReducer = (state=inintialState, action: {type: string}) => {
  switch (action.type) {
    case toggleMenu:
      return {...state, menuState: !state.menuState}
  
    case closeMenu:
      return {...state, menuState: false}
  
    default:
      return state
  }
}