import styled from 'styled-components';
import { BiCartAdd } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
	width: 100%;
	height: 64px;
	background-color: var(--light-color);
	color: var(--dark-color);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	border-bottom: 1px solid var(--light-color);
	position: sticky;
	top: 0;
	left: 0;
	font-weight: 700;
`;

export const LogoContainStyle = styled.div`
	padding: 0 10px;
	display: flex;
	align-items: center;
	height: 100%;
	cursor: pointer;
`;

export const LogoStyle = styled.img`
	width: 65px;
	height: 65px;
`;

export const NavStyle = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const NavLinkStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const NavLinkIcons = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const LinkStyle = styled(Link)`
	color: var(--dark-color);
	font-size: 1.1rem;
	cursor: pointer;
	font-family: 'fira code';
	font-weight: 700;
`;

export const IconCartContainer = styled.div``;

export const IconCartLogo = styled(BiCartAdd)`
	font-size: 1.5rem;
	font-weight: 600;
	cursor: pointer;
`;

export const IconUser = styled(FaUserCircle)`
	font-size: 1.5rem;
	font-weight: 600;
	cursor: pointer;
`;
