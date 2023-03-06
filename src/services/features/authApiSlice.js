import {apiSlice} from "../api/apiSlice.js"

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: "/auth/authentication",
				method: "POST",
				body: { ...credentials }
			})
		})
	})
})

export const {
	useLoginMutation
} = authApiSlice

