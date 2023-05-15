import React from 'react';
import CardProduct from './CardProduct';
import { CardButtonsWrapper, CardsWrapper } from './CardProductsStyles';
import ButtonProducts from '../../componentsUI/buttons/buttonProducts/ButtonProducts';
import { useSelector } from 'react-redux';

const CardsProducts = () => {
	let products = useSelector((state) => state.product.products);
	const selectCategory = useSelector(
		(state) => state.categories.selectedCategories
	);

	const renderSelectedCategory = () => {
		return selectCategory.map((game) => {
			return <CardProduct key={game.id} {...game} />;
		});
	};

	return (
		<>
			<CardsWrapper>
				{selectCategory == null
					? Object.entries(products).map(([, games]) =>
							games.map((game) => <CardProduct key={game.id} {...game} />)
					  )
					: renderSelectedCategory()}
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
