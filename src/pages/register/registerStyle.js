import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import InputForm from '../../componentsUI/inputs/InputForm';

export const RegisterContainer = styled.div`
	color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 5rem 5rem 8rem;
`;

export const RegisterTitle = styled.h2`
	font-size: 50px;
`;

export const RegisterForm = styled(FormikForm)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const InputRegister = styled(InputForm)`
	background-color: red;
`;
