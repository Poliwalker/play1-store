import { createSlice } from '@reduxjs/toolkit';
import { addProduct, removeProductFromCart, resetSend } from './cartFuntions';

const INITIAL_STATE = {
	cartProduct: [],
	send: 0,
	hidden: true,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: INITIAL_STATE,
	reducers: {
		toggleHidden: (state) => {
			return {
				...state,
				hidden: !state.hidden,
			};
		},
		addCart: (state, action) => {
			return {
				...state,
				cartProduct: addProduct(state.cartProduct, action.payload),
				send: 0,
			};
		},
		removeCart: (state, action) => {
			return {
				...state,
				cartProduct: removeProductFromCart(state.cartProduct, action.payload),
				send: resetSend(state.cartProduct, state.send),
			};
		},
		resetCart: (state) => {
			return {
				...state,
				cartProduct: [],
				send: 0,
			};
		},
	},
});

export const { toggleHidden, resetCart, removeCart, addCart } =
	cartSlice.actions;
export default cartSlice.reducer;
