'use client'

import { createSlice } from '@reduxjs/toolkit'

import { CounterStateType } from '@/types/CounterStateType'

const initialState: CounterStateType = {
  value: 0
}

const couterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = couterSlice.actions

export default couterSlice.reducer
