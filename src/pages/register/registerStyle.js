import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const RegisterContainer = styled.div`
	color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 5rem 2rem 8rem;
`;

export const RegisterTitle = styled.h2`
	font-size: 50px;
`;

export const RegisterSubTitle = styled.h4`
	max-width: 350px;
	text-align: center;
`;

export const RegisterForm = styled(FormikForm)``;
