import { createSlice } from '@reduxjs/toolkit';
import { Genre } from '../../data/categories';
import { gamesPlay } from '../../data/dataGames';

const INITIAL_STATE = {
	categories: Genre,
	selectedCategories: null,
	products: gamesPlay,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: INITIAL_STATE,
	reducers: {
		selectCategories: (state, action) => {
			{
				const categoryFiltered = state.products.filter(
					(game) => game.genre == action.payload
				);
				state.selectedCategories = categoryFiltered;
			}
		},
		categories: (state) => {
			return state;
		},
	},
});

export const { selectCategories, categories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
