import React from 'react';
import {
	LinkStyleLogin,
	LoginForm,
	LoginTitle,
	LoginWrapper,
} from './LoginStyle';
import { Formik } from 'formik';
import InputForm from '../../componentsUI/inputs/InputForm';
import { ButtonSubmit } from '../../componentsUI/buttons/buttonSubmit/buttonSubmitStyle';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { useSelector } from 'react-redux';

const Login = () => {
	const isLoginOpen = useSelector((state) => state.login.login);

	return (
		<LoginWrapper isLoginOpen={isLoginOpen}>
			<LoginTitle>Iniciar Sesión</LoginTitle>
			<Formik
				initialValues={loginInitialValues}
				validationSchema={loginValidationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<LoginForm>
					<InputForm
						htmlFor="usuario"
						type="text"
						id="usuario"
						placeholder="ingresa tu usuario"
						name="usuario"
					></InputForm>
					<InputForm
						htmlFor="password"
						type="text"
						id="contraseña"
						placeholder="ingresa tu contraseña"
						name="password"
					></InputForm>
					<ButtonSubmit>Ingresar</ButtonSubmit>
				</LoginForm>
			</Formik>
			<LinkStyleLogin to="/register">
				no tiene usuario ¿Registrese?
			</LinkStyleLogin>
		</LoginWrapper>
	);
};

export default Login;
