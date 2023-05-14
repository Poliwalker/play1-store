import React from 'react';
import {
	ButtonsCartContainer,
	CardCartWrapper,
	CartDetailsStyle,
	CartImgStyle,
	CartTitleCardStyle,
	CirclePlusStyle,
	ExisSustracStyle,
} from './CardCartStyle';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../../redux/cartSlice/CartSlice';

const CardCart = ({ id, img, name, desc, genre, quantity, price }) => {
	const dispatch = useDispatch();

	return (
		<CardCartWrapper>
			<CartImgStyle src={img} alt={name} />
			<CartDetailsStyle>
				<CartTitleCardStyle>{name}</CartTitleCardStyle>

				<ButtonsCartContainer>
					<ExisSustracStyle onClick={() => dispatch(removeCart(id))} />

					<p>{quantity}</p>

					<CirclePlusStyle
						onClick={() => dispatch(addCart({ img, id, name, desc, genre }))}
					/>
				</ButtonsCartContainer>
			</CartDetailsStyle>
			<p>{price}$</p>
		</CardCartWrapper>
	);
};

export default CardCart;
