import styled from 'styled-components';

export const InputContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 40%;
	margin: 1rem;
`;

export const LabelStyle = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	font-size: 1.2rem;
	width: 40%;
`;

export const InputStyle = styled.input`
	padding: 1rem 2.3rem;
	border-radius: 10px;
	background-color: var(--light-color);
	border-radius: 8px;
	height: 30px;
	padding: 0.5rem 1rem;
	color: white;
	width: 70%;
`;

export const InputErrorStyle = styled.p`
	margin: 0;
	margin-top: 5px;
	color: #fb103d;
	font-size: 14px;
`;
