import React from 'react';
import { ButtonSubmit } from '../../componentsUI/buttons/buttonSubmit/buttonSubmitStyle';
import {
	InputRegister,
	RegisterContainer,
	RegisterForm,
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
			<Formik
				initialValues={registerInitialValues}
				validationSchema={registerValidationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<RegisterForm>
					<InputRegister
						name="nombre"
						type="text"
						label="nombre"
						placeholder="ingrese un nombre"
					/>
					<InputForm
						name="email"
						type="email"
						label="Correo"
						placeholder="ingrese un correo"
					/>
					<InputForm
						name="password"
						type="password"
						label="Contraseña"
						placeholder="ingrese una contraseña"
					/>
					<ButtonSubmit type="submit">Registrarse</ButtonSubmit>
				</RegisterForm>
			</Formik>
		</RegisterContainer>
	);
};

export default Register;
