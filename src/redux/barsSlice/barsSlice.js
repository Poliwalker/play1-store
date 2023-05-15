import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	bars: false,
};

const barsSlice = createSlice({
	name: 'bars',
	initialState: INITIAL_STATE,
	reducers: {
		toggleBars: (state) => {
			return {
				...state,
				bars: !state.bars,
			};
		},
	},
});

export const { toggleBars } = barsSlice.actions;
export default barsSlice.reducer;
