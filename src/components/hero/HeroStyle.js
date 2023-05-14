import styled from 'styled-components';

export const HeroStyle = styled.section`
	width: 100%;
	max-width: 1500px;
	margin: 0 auto;
	padding: 100px 20px;
	background: url('https://wallpaperaccess.com/full/3377398.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const LogoStore = styled.img`
	width: 100px;
	height: 100px;
`;

export const ButtonHero = styled.button`
	padding: 10px 20px;
	background: #ff600a;
	color: var(--ligth-color);
	border: none;
	border-radius: 10px;
	width: 200px;
	cursor: pointer;
`;

export const HeroTitle = styled.h1`
	font-size: 50px;
	font-weight: 600;
`;

export const HeroSubtitle = styled.h3`
	font-size: 20px;
	font-weight: 400;
	max-width: 500px;
`;

export const HeroImgContainer = styled.div`
	padding: 20px;
`;

export const HeroImg = styled.img`
	width: 100%;
	height: 100%;
`;
