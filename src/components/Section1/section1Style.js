import styled from 'styled-components';

export const Section1Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background-color: #f5f7fa;
	color: var(--dark-color);
	padding: 5rem 1rem;
`;

export const Section1Presentation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
`;

export const Section1Title = styled.h2`
	font-size: 2.1rem;
	max-width: 400px;
`;

export const Section1Text = styled.p`
	font-size: 18px;
	max-width: 400px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
`;

export const ButtonSection1 = styled.button`
	border-radius: 20px;
	color: white;
	font-size: 18px;
	font-weight: 500;
	padding: 5px 10px;
	cursor: pointer;
	&&:nth-child(1) {
		background-color: #0070cc;
	}
	&&:nth-child(2) {
		background-color: #d53b00;
	}
`;

export const Section1ImgContainer = styled.div`
	display: flex;
`;

export const Section1Img = styled.img`
	width: 800px;
`;
