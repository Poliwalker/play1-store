import { createSlice } from '@reduxjs/toolkit';
import { GamesPlay, TotalProducts } from '../../data/dataGames';

const INITIAL_STATE = {
	products: GamesPlay,
	totalProducts: TotalProducts,
};

const productsSlice = createSlice({
	name: 'products',
	initialState: INITIAL_STATE,
	reducers: {
		getProducts: (state) => {
			return state;
		},
	},
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
