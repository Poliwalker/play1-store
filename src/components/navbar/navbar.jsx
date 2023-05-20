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
	BarsMenuStyle,
} from './navbarStyle';
import { useNavigate } from 'react-router-dom';
import IconCart from '../../componentsUI/IconCart/IconCart';
import CartWrapper from '../cart/CartWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBars } from '../../redux/barsSlice/barsSlice';
import Login from '../login/Login';
import { loginToggle } from '../../redux/loginSlice/loginSlice';
import { toggleHidden } from '../../redux/cartSlice/CartSlice';

const navbar = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const isOpenMenu = useSelector((state) => state.bars.bars);
	const isLoginOpen = useSelector((state) => state.login.login);
	const isCartOpen = useSelector(state => state.cart.hidden);

	const handleOpenUser = () => {
		dispatch(loginToggle());
		if(!isCartOpen) dispatch(toggleHidden());
	}

	return (
		<HeaderStyle>
			<CartWrapper />
			<Login />
			<LogoContainStyle className="logo" onClick={() => navigate('/')}>
				<LogoStyle
					src="https://icon-library.com/images/playstation-logo-icon/playstation-logo-icon-15.jpg"
					alt="logo-play"
				/>

				<p>Play 1 AR</p>
			</LogoContainStyle>
			<BarsMenuStyle onClick={() => dispatch(toggleBars())} />
			<NavStyle>
				<NavLinkStyle isOpenMenu={isOpenMenu}>
					<LinkStyle to="/">Inicio</LinkStyle>
					<LinkStyle to="/products-store">Tienda</LinkStyle>
					<LinkStyle to="/location">ubicacion</LinkStyle>
					<LinkStyle to="/contact">contacto</LinkStyle>
				</NavLinkStyle>
				<NavLinkIcons>
					<IconCart />
					<IconUser onClick={() => handleOpenUser()} />
				</NavLinkIcons>
			</NavStyle>
		</HeaderStyle>
	);
};

export default navbar;
