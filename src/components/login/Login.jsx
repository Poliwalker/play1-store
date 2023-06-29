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
import { useDispatch, useSelector } from 'react-redux';
import { toggleHidden } from '../../redux/cartSlice/CartSlice';
import { loginToggle } from '../../redux/loginSlice/loginSlice';
import { AnimatePresence } from 'framer-motion';

const Login = () => {
	const isLoginOpen = useSelector((state) => state.login.login);
	const isCartOpen = useSelector((state) => state.cart.hidden);

	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (isCartOpen) {
			dispatch(toggleHidden());
			dispatch(loginToggle());
		} else {
			dispatch(loginToggle());
		}
	};

	return (
		<AnimatePresence>
			<LoginWrapper
				isLoginOpen={isLoginOpen}
				initial={{ translateX: 600 }}
				animate={{ translateX: 0 }}
				exit={{ translateX: 600 }}
				transition={{ type: 'spring', damping: 27 }}
				key="login-modal"
			>
				<LoginTitle>Iniciar Sesión</LoginTitle>
				<Formik
					initialValues={loginInitialValues}
					validationSchema={loginValidationSchema}
					onSubmit={() => handleSubmit()}
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
				<LinkStyleLogin onClick={() => dispatch(loginToggle())} to="/register">
					no tiene usuario ¿Registrese?
				</LinkStyleLogin>
			</LoginWrapper>
		</AnimatePresence>
	);
};

export default Login;
