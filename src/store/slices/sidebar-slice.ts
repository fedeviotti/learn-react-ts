import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface SlidebarState {
  active: boolean
}

// Define the initial state using that type
const initialState: SlidebarState = {
  active: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
})

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
