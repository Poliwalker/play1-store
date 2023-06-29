import React from 'react';
import {
	CardDesc,
	CardImage,
	CardTitle,
	CardWrapper,
	IconCardCart,
	ButtonBuy,
} from './CardProductsStyles';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/cartSlice/CartSlice';

const CardProduct = ({ name, img, desc, genre, price, id }) => {
	const dispatch = useDispatch();

	return (
		<CardWrapper>
			<CardImage src={img} alt={name} />
			<CardTitle>{name}</CardTitle>
			<CardDesc>{desc}</CardDesc>
			<p>{price}$</p>
			<p>genero: {genre}</p>
			<ButtonBuy
				onClick={() => dispatch(addCart({ name, img, desc, genre, price, id }))}
			>
				Agregar a
				<IconCardCart />
			</ButtonBuy>
		</CardWrapper>
	);
};

export default CardProduct;
