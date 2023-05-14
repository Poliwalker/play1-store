import styled from 'styled-components';

export const MainLocation = styled.main`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	max-width: 1500px;
	margin: 0 auto;
	color: var(--dark-color);
	padding: 5rem 1rem;
`;

export const IframeStyle = styled.iframe`
	width: 350px;
	height: 500px;
`;

export const TextLocation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleLocation = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;
