import React from 'react';
import {
	HeaderStyle,
	LogoContainStyle,
	LogoStyle,
	NavStyle,
	NavLinkStyle,
	NavLinkIcons,
	IconUser,
	LinkStyle,
} from './navbarStyle';
import { useNavigate } from 'react-router-dom';
import IconCart from '../../componentsUI/IconCart/IconCart';
import CartWrapper from '../cart/CartWrapper';

const navbar = () => {
	const navigate = useNavigate();

	return (
		<HeaderStyle>
			<CartWrapper />
			<LogoContainStyle className="logo" onClick={() => navigate('/')}>
				<LogoStyle
					src="https://icon-library.com/images/playstation-logo-icon/playstation-logo-icon-15.jpg"
					alt="logo-play"
				/>

				<p>Play 1 AR</p>
			</LogoContainStyle>
			<NavStyle>
				<NavLinkStyle>
					<LinkStyle to="/">Inicio</LinkStyle>
					<LinkStyle to="/products-store">Tienda</LinkStyle>
					<LinkStyle to="/location">ubicacion</LinkStyle>
					<LinkStyle to="/contact">contacto</LinkStyle>
				</NavLinkStyle>
				<NavLinkIcons>
					<IconCart />
					<IconUser />
				</NavLinkIcons>
			</NavStyle>
		</HeaderStyle>
	);
};

export default navbar;
