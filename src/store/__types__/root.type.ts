export type actionType = {
  type: string
  payload?: string
}

export type stateType = {
  menuState: boolean
  currentTheme: 'dark' | 'light'
}
