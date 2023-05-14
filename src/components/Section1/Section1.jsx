import React from 'react';
import {
	Section1Container,
	Section1Presentation,
	Section1Title,
	Section1Text,
	ButtonContainer,
	ButtonSection1,
	Section1ImgContainer,
	Section1Img,
} from './section1Style';
import { useNavigate } from 'react-router-dom';

const Section1 = () => {
	const navigate = useNavigate();

	return (
		<>
			<Section1Container>
				<Section1Presentation>
					<Section1Title>
						La biblioteca más grande de juegos de PlayStation del mundo
					</Section1Title>
					<Section1Text>
						Explora la PlayStation Store desde tu consola, smartphone o
						navegador web y descubre un tesoro oculto de juegos — desde éxitos
						de triple A a joyas independientes — así como complementos y pases
						de temporada. Con ventas regulares, promociones y ahorros
						adicionales para los miembros de PlayStation Plus, siempre te espera
						una aventura más.
					</Section1Text>

					<ButtonContainer>
						<ButtonSection1 onClick={() => navigate('/products-store')}>
							Ver todos los Juegos
						</ButtonSection1>
						<ButtonSection1 onClick={() => navigate('/contact')}>
							Contactanos para mas info
						</ButtonSection1>
					</ButtonContainer>
				</Section1Presentation>
				<Section1ImgContainer>
					<Section1Img
						src="https://geekzilla.tech/home/wp-content/uploads/2021/12/Sony-PlayStation-1.jpg"
						alt="play"
					/>
				</Section1ImgContainer>
			</Section1Container>
		</>
	);
};

export default Section1;
