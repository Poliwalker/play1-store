import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const StoreContainer = styled.main`
	width: 100%;
	color: var(--dark-color);
	padding: 5rem 1rem;
`;

export const StoreTitle = styled.h1`
	text-align: center;
	font-size: 50px;
	font-weight: 700;
`;

export const InputStoreWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StoreInputStyle = styled.input`
	padding: 0.5rem 2.3rem;
	outline: none;
	border-radius: 10px;
	background-color: var(--light-color);
`;

export const SearchIconStyle = styled(BiSearchAlt)`
	font-size: 40px;
	color: #000000;
`;

export const CategoriesWrapperStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 1.5rem;
	padding: 1rem;
`;
