import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		token: null
	},
	reducers: {
		setCreditials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
		},
		logOut: (state) =>{
			state.user = null
			state.token = null
		}
	}
})


export const { setCreditials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
