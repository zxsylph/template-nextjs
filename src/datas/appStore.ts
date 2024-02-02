'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

import { apiSlice } from '@/apis/apiSlice'
import authReducer from '@/features/auth/authSlice'
import counterReducer from '@/features/counter/counterSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  counter: counterReducer
})

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({ serializableCheck: false })
    middlewares.concat(apiSlice.middleware)
    if (process.env.NODE_ENV !== 'production') {
      middlewares.concat(logger)
    }
    return middlewares
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
