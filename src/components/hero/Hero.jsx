import React from 'react';
import {
	ButtonHero,
	HeroContent,
	HeroImg,
	HeroImgContainer,
	HeroStyle,
	HeroSubtitle,
	HeroTitle,
	LogoStore,
} from './HeroStyle';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<>
			<HeroStyle className="hero-container">
				<HeroContent>
					<LogoStore src="https://img.hype.games/cdn/451cf966-60c9-4648-9a77-3f92906b365c15a233de-6b9c-4397-a4ae-40b7e3e6f43dpsn-store-logo.png" />
					<HeroTitle>Tienda play 1 ar</HeroTitle>
					<HeroSubtitle>
						explora todas las opciones para volver a jugar en esta hermosa
						consola
					</HeroSubtitle>

					<ButtonHero onClick={() => navigate('/products-store')}>
						Comprar
					</ButtonHero>
				</HeroContent>

				<HeroImgContainer>
					<HeroImg
						src="https://www.latercera.com/resizer/D2uz3-3qp5609hnbsfYiYuq90Hs=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/V6MSFCLBEVFAJLPUYBW2DDTKQQ.jpg"
						alt="play 1"
					/>
				</HeroImgContainer>
			</HeroStyle>
		</>
	);
};

export default Hero;
