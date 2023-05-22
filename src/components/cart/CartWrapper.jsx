import React from 'react';
import CardCart from './CardCart';
import {
	CartCardsContainer,
	CartTotalWrapper,
	CardsWrapperStyle,
	TotalSendStyle,
	TotalPayStyle,
	TotalStyle,
	ButtonFinishBuy,
	ClearCartContainer,
	ClearCartIcon,
} from './CardCartStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetCart, toggleHidden } from '../../redux/cartSlice/CartSlice';

const CartWrapper = () => {
	const dispatch = useDispatch();
	const hiddenCart = useSelector((state) => state.cart.hidden);

	useEffect(() => {
		if (!hiddenCart) {
			dispatch(toggleHidden());
		}
	}, [dispatch]);

	const { cartProduct, send } = useSelector((state) => state.cart);

	const totalPrice = cartProduct
		? cartProduct.reduce((acc, item) => {
				return acc + item.price * item.quantity;
		  }, 0)
		: [];

	const finishBuy = () => {
		window.confirm('¿Estas seguro de finalizar la compra?');
		alert('Gracias por tu compra');
		dispatch(resetCart());
		dispatch(toggleHidden());
	};

	return (
		<>
			{!hiddenCart && (
				<CardsWrapperStyle>
					<ClearCartContainer>
						<ClearCartIcon onClick={() => dispatch(resetCart())} />
					</ClearCartContainer>

					<h1>Tus Productos son...</h1>
					<CartCardsContainer>
						{cartProduct ? (
							cartProduct.map((item) => <CardCart key={item.id} {...item} />)
						) : (
							<p>no hay productos en el carrito</p>
						)}
					</CartCardsContainer>
					<CartTotalWrapper>
						<TotalStyle>
							<p>Total:</p>
							<p>{totalPrice}</p>
						</TotalStyle>
						<TotalSendStyle>
							<p>envio:</p>
							<p>{send}</p>
						</TotalSendStyle>
						<TotalPayStyle>
							<p>total: </p>
							<p>{totalPrice + send}</p>
						</TotalPayStyle>
					</CartTotalWrapper>
					<ButtonFinishBuy onClick={() => finishBuy()}>
						Finalizar Compra
					</ButtonFinishBuy>
				</CardsWrapperStyle>
			)}
		</>
	);
};

export default CartWrapper;
