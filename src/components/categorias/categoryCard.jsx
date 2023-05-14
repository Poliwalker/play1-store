import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categoriesSlice/categoriesSlice';
import {
	CardCategoryImg,
	CardCategoryStyle,
	CategoriesTitle,
} from './categoriesStyle';

const CategoryCard = ({ category, img, title }) => {
	const categoryClick = useSelector(
		(state) => state.categories.selectedCategories
	);

	const dispatch = useDispatch();

	return (
		<CardCategoryStyle
			selected={category === categoryClick}
			onClick={() => dispatch(selectCategories(category))}
		>
			<CardCategoryImg src={img} alt={title} />
			<CategoriesTitle>{title}</CategoriesTitle>
		</CardCategoryStyle>
	);
};

export default CategoryCard;
