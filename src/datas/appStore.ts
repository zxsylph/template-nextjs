'use client'

import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import counterReducer from '@/datas/features/counter/counterSlice'

export const appStore = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type RootState = ReturnType<typeof appStore.getState>
type AppDispatch = typeof appStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
