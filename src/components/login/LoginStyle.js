import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginWrapper = styled.main`
	width: 450px;
	height: 500px;
	position: absolute;
	top: 64px;
	right: 0;
	background-color: var(--primary-color);
	display: ${(props) => (props.isLoginOpen ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`;

export const LoginTitle = styled.h2`
	font-size: 18px;
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

export const LinkStyleLogin = styled(Link)``;
