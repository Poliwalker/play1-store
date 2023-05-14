import { createSlice } from '@reduxjs/toolkit';
import { Genre } from '../../data/categories';

const INITIAL_STATE = {
	categories: Genre,
	selectedCategories: null,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: INITIAL_STATE,
	reducers: {
		selectCategories: (state, action) => {
			return {
				...state,
				selectedCategories:
					action.payload !== state.selectedCategories ? action.payload : null,
			};
		},
		categories: (state) => {
			return state;
		},
	},
});

export const { selectCategories, categories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
