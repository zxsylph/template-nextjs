'use client'

import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/datas/appStore'
import { AuthStateType } from '@/types/AuthStateType'

const initialState: AuthStateType = {
  userId: null,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, user, token } = action.payload
      state.userId = userId
      state.user = user
      state.token = token
    },
    logOut: (state) => {
      state.userId = null
      state.user = null
      state.token = null
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentCredential = (state: RootState): AuthStateType =>
  state.auth
export const selectCurrentUserId = (state: RootState): string | null =>
  state.auth.userId
export const selectCurrentUser = (state: RootState): string | null =>
  state.auth.user
export const selectCurrentToken = (state: RootState): string | null =>
  state.auth.token
