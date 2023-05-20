import React from 'react';
import {
	IconCartContainer,
	IconCartLogo,
} from '../../components/navbar/navbarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHidden } from '../../redux/cartSlice/CartSlice';
import { loginToggle } from '../../redux/loginSlice/loginSlice';

const IconCart = () => {
	const { cartItems } = useSelector(state => state.cart)
	const loginStateOpen = useSelector(state => state.login.login);
	const totalCartItem = cartItems ? cartItems.reduce((acc, item) => (acc += item.quantity),0) : [];

	const dispatch = useDispatch();

	const handleOpenCart = () => {
		if(loginStateOpen){
			dispatch(toggleHidden())
		    dispatch(loginToggle())
		} else {
			dispatch(toggleHidden())
		}
	}

	return (
		<IconCartContainer onClick={() => handleOpenCart()}>
			<IconCartLogo />
			<span>{totalCartItem}</span>
		</IconCartContainer>
	);
};

export default IconCart;
