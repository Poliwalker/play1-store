import React from 'react';
import {
	CategoriesWrapperStyle,
	InputStoreWrapper,
	SearchIconStyle,
	StoreContainer,
	StoreInputStyle,
	StoreTitle,
} from './ProductsStoreStyle';
import CardsProducts from '../../components/Products/CardsProducts';
import CaterogiesWrapper from '../../components/categorias/caterogiesWrapper';

const ProductsStore = () => {
	return (
		<>
			<StoreContainer>
				<StoreTitle>Store Play Station 1</StoreTitle>
				<InputStoreWrapper>
					<StoreInputStyle />
					<SearchIconStyle />
				</InputStoreWrapper>
				<CategoriesWrapperStyle>
					<CaterogiesWrapper />
				</CategoriesWrapperStyle>
				<CardsProducts>{/* <CardProduct /> */}</CardsProducts>
			</StoreContainer>
		</>
	);
};

export default ProductsStore;
