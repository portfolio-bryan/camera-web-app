import { createSlice } from '@reduxjs/toolkit'

export const cameraSlice = createSlice({
  name: 'cameraLight',
  initialState: { isOn: false },
  reducers: {
    toggle: state => { state.isOn = !state.isOn },
  },
})

export const { toggle } = cameraSlice.actions
