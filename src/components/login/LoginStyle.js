import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { motion } from 'framer-motion';

export const LoginWrapper = styled(motion.main)`
	width: 450px;
	height: 500px;
	position: absolute;
	top: 64px;
	right: 0;
	background-color: rgba(29, 188, 228, 0.85);
	box-shadow: 3px 1px 14px 6px #c2c2c2, 5px 5px 10px 1px #000;
	display: ${(props) => (props.isLoginOpen ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`;

export const LoginTitle = styled.h2`
	font-size: 35px;
	color: var(--light-color);
	padding: 1.2rem 1rem;
`;
export const LoginForm = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	gap: 20px;
`;

export const LoginButton = styled.button``;

export const LinkStyleLogin = styled(Link)`
	color: var(--light-color);
	margin-top: 1rem;
`;
