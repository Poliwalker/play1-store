import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';
import {
	CardButtonsWrapper,
	CardsWrapper,
	ButtonProducts,
} from './CardProductsStyles';
import { useSelector } from 'react-redux';
import { INITIAL_LIMIT } from '../../utils/constants';

const CardsProducts = () => {
	const [limit, setLimit] = useState(INITIAL_LIMIT);
	// console.log(limit);

	let products = useSelector((state) => state.product.products);
	// console.log(products);
	const selectedCategory = useSelector(
		(state) => state.categories.selectedCategories
	);

	if (selectedCategory) {
		products = { [selectedCategory]: products[selectedCategory] };
	}

	const totalProducts = useSelector((state) => state.product.totalProduct);

	useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

	return (
		<>
			<CardsWrapper>
				{Object.entries(products).map(([, games]) =>
					games.map((game) => {
						if (limit >= game.id || selectedCategory) {
							return <CardProduct key={game.id} {...game} />;
						}
						return null;
					})
				)}
			</CardsWrapper>
			{!selectedCategory && (
				<CardButtonsWrapper>
					<ButtonProducts
						onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
						disabled={INITIAL_LIMIT === limit}
					>
						<span>Ver menos</span>
					</ButtonProducts>
					<ButtonProducts
						onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
						disabled={totalProducts <= limit}
					>
						<span>Ver más</span>
					</ButtonProducts>
				</CardButtonsWrapper>
			)}
		</>
	);
};

export default CardsProducts;
