import styled from 'styled-components';

export const InputContainerStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	margin: 0.5rem 0;
`;

export const InputStyle = styled.input`
	width: 100%;
	border-radius: 10px;
	background-color: var(--light-color);
	color: var(--dark-color);
	border-radius: 8px;
	height: 30px;
	padding: 0.5rem 1rem;
`;

export const InputErrorStyle = styled.p`
	margin: 0;
	margin-top: 5px;
	color: #fb103d;
	font-size: 14px;
`;
