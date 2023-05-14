import styled from 'styled-components';
import { BiCartAdd } from 'react-icons/bi';

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	max-width: 1500px;
	margin: 1.6rem auto;
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

export const IconCardCart = styled(BiCartAdd)`
	font-size: large;
`;

export const CardImage = styled.img`
	width: 200px;
	height: 200px;
`;

export const CardTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	font-family: 'poppins', sans-serif;
`;

export const CardDesc = styled.p`
	font-size: 0.8rem;
	font-weight: 400;
	font-family: 'roboto', sans-serif;
	max-width: 200px;
	text-align: center;
`;
