'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

import counterReducer from '@/datas/features/counter/counterSlice'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })
    if (process.env.NODE_ENV !== 'production') {
      middlewares.concat(logger)
    }
    return middlewares
  },
  devTools: process.env.NODE_ENV !== 'production'
})

type RootState = ReturnType<typeof appStore.getState>
type AppDispatch = typeof appStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
