import {
  FetchArgs,
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import { RootState } from '@/datas/appStore'
import { logOut, setCredentials } from '@/features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.auth.token
    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error && 'originalStatus' in result.error) {
    if (result.error.originalStatus === 403) {
      console.log('sending refresh token')

      const refreshResult = await baseQuery('/refresh', api, extraOptions)
      console.log(refreshResult)
      if (refreshResult?.data) {
        const { userId, user } = api.getState().auth
        api.dispatch(setCredentials({ ...refreshResult.data, user, userId }))
        result = await baseQuery(args, api, extraOptions)
      } else {
        api.dispatch(logOut())
      }
    }
  }
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({})
})
