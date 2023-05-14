import styled from 'styled-components';

export const CardCategoryStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const CardCategoryImg = styled.img`
	width: 75px;
	height: 75px;
	border-radius: 20px;
`;

export const CategoriesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1.2rem;
`;

export const CategoriesTitle = styled.h2`
	font-size: 15px;
`;
