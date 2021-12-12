import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // you can access with counterSlice.reducer
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incrementByAmount } = counterSlice.actions
