import React from 'react';
import CardProduct from './CardProduct';
import { CardButtonsWrapper, CardsWrapper } from './CardProductsStyles';
import ButtonProducts from '../../componentsUI/buttons/buttonProducts/ButtonProducts';
import { useSelector } from 'react-redux';

const CardsProducts = () => {
	let products = useSelector((state) => state.product.products);

	// const totalProducts = useSelector((state) => state.products.totalProducts);

	return (
		<>
			<CardsWrapper>
				{Object.entries(products).map(([, games]) =>
					games.map((game) => <CardProduct key={game.id} {...game} />)
				)}
			</CardsWrapper>
			<CardButtonsWrapper>
				<ButtonProducts>
					<span>Ver menos</span>
				</ButtonProducts>
				<ButtonProducts>
					<span>Ver más</span>
				</ButtonProducts>
			</CardButtonsWrapper>
		</>
	);
};

export default CardsProducts;
