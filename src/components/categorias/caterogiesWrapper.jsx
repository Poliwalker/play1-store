import React from 'react';
import CategoryCard from './categoryCard';
import { CategoriesContainer } from './categoriesStyle';
import { useSelector } from 'react-redux';

const CaterogiesWrapper = () => {
	const categories = useSelector((state) => state.categories.categories);

	return (
		<CategoriesContainer>
			{categories.map((category) => (
				<CategoryCard
					key={category.id}
					category={category.genre}
					img={category.img}
					title={category.title}
				/>
			))}
		</CategoriesContainer>
	);
};

export default CaterogiesWrapper;
