import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"
import {logOut, setCreditials} from "../features/authSlice.js"


const baseQuery = fetchBaseQuery({
	baseUrl: "https://api.orientaluniversity.uz/api/v1/",
	credentials: "include",
	prepareHeaders: (headers, {getState}) => {
		const token = getState().auth.token
		if(token) {
			headers.set("authorization", `Bearer ${token}`)
		}
		return headers
	}
})


const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if(result?.error?.originalStatus === 403) {
		console.log("sending refresh token")

		const  refreshResult = await baseQuery("/refresh", api, extraOptions)
		if (refreshResult?.data) {
			const user = api.getState().auth.user
			api.dispatch(setCreditials({...refreshResult.data, user}))
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logOut())
		}
	}
	return result
}

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({})
})
