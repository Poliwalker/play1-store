import React from 'react';
import { ButtonSubmit } from '../../componentsUI/buttons/buttonSubmit/buttonSubmitStyle';
import {
	RegisterContainer,
	RegisterForm,
	RegisterSubTitle,
	RegisterTitle,
} from './registerStyle';
import InputForm from '../../componentsUI/inputs/InputForm';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { Formik } from 'formik';

const Register = () => {
	return (
		<RegisterContainer>
			<RegisterTitle>Pagina de Registro</RegisterTitle>
			<RegisterSubTitle>
				para poder comprar nuestros productos create una cuenta
			</RegisterSubTitle>
			<Formik
				initialValues={registerInitialValues}
				validationSchema={registerValidationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<RegisterForm>
					<InputForm name="nombre" type="text" label="nombre" />
					<InputForm name="email" type="email" label="Correo" />
					<InputForm name="password" type="password" label="Contraseña" />
					<ButtonSubmit type="submit">Registrarse</ButtonSubmit>
				</RegisterForm>
			</Formik>
		</RegisterContainer>
	);
};

export default Register;
