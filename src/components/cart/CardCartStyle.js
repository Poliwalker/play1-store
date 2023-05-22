import styled from 'styled-components';
import { BiCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import { FaTrashAlt } from 'react-icons/fa';
export const CardsWrapperStyle = styled.div`
	position: fixed;
	top: 64px;
	right: 0;
	z-index: 100;
	width: 435px;
	height: calc(85vh - 64px);
	background-color: rgba(29, 188, 228, 0.85);
	box-shadow: 3px 1px 14px 6px #c2c2c2, 5px 5px 10px 1px #000;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ClearCartContainer = styled.div`
	background-color: #ffffff;
	width: 50px;
	height: 50px;
	padding: 2px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ClearCartIcon = styled(FaTrashAlt)`
	color: #000;
	font-size: 30px;
	cursor: pointer;
`;

export const CartCardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;

	overflow: scroll;

	&::-webkit-scrollbar {
		background: var(--primary-color);
	}

	&::-webkit-scrollbar:horizontal {
		display: none;
	}
`;

export const CartTotalWrapper = styled.div``;

export const TotalStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TotalSendStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TotalPayStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ButtonFinishBuy = styled.button`
	background-color: var(--primary-color);
	color: #ffffff;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	border: none;
	font-size: 1rem;
	font-weight: 500;
	font-family: 'poppins', sans-serif;
	cursor: pointer;
`;

export const CardCartWrapper = styled.div`
	width: 300px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--primary-color);
`;

export const CartImgStyle = styled.img`
	width: 50px;
	height: 50px;
`;

export const CartDetailsStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CartTitleCardStyle = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	font-family: 'poppins', sans-serif;
`;
export const ButtonsCartContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const CirclePlusStyle = styled(BiCircle)`
	color: green;
	cursor: pointer;
`;

export const ExisSustracStyle = styled(ImCancelCircle)`
	color: red;
	cursor: pointer;
`;
