import { apiSlice } from '@/apis/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (creadential) => ({
        url: '/auth/local',
        method: 'POST',
        body: { ...creadential }
      })
    })
  })
})
