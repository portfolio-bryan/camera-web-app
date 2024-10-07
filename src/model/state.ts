export const initialState = {
  user: {
    name: '',
    email: '',
    isAuthenticated: false,
  },
  camera: {
    lighIsOn: false,
    speakerIsOn: false,
  }
}

export type State = typeof initialState