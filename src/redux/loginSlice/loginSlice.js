import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	login: false,
};

const loginSlice = createSlice({
	name: 'login',
	initialState: INITIAL_STATE,
	reducers: {
		loginToggle: (state) => {
			return {
				...state,
				login: !state.login,
			};
		},
	},
});

export const { loginToggle } = loginSlice.actions;
export default loginSlice.reducer;
