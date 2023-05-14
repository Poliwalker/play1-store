import React from 'react';
import {
	IconCartContainer,
	IconCartLogo,
} from '../../components/navbar/navbarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHidden } from '../../redux/cartSlice/CartSlice';

const IconCart = () => {
	const totalCartItem = useSelector((state) => state.cart.cartProduct).reduce(
		(acc, item) => (acc += item.quantity),
		0
	);

	const dispatch = useDispatch();

	return (
		<IconCartContainer onClick={() => dispatch(toggleHidden())}>
			<IconCartLogo />
			<span>{totalCartItem}</span>
		</IconCartContainer>
	);
};

export default IconCart;
