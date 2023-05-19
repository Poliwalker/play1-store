import React from 'react';
import InputForm from '../../componentsUI/inputs/InputForm';
import { ContactContainer } from './ContactStyle';
import { Formik } from 'formik';
import { LoginForm } from '../../components/login/LoginStyle';
import { contactInitialValues } from '../../formik/initialValues';
import { contactValidationSchema } from '../../formik/validationSchema';
import { ButtonSubmit } from '../../componentsUI/buttons/buttonSubmit/buttonSubmitStyle';

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<h1>Contacto</h1>
				<p>Deje sus datos para poder mandarle las ofertas</p>

				<Formik
					initialValues={contactInitialValues}
					validacionSchema={contactValidationSchema}
					onSubmit={(values) => {
						console.log(values);
						resetForm();
					}}
				>
					<LoginForm>
						<InputForm
							htmlFor="nombre"
							type="text"
							id="nombre"
							placeholder="ingresa tu nombre"
							name="nombre"
						>
							Nombre
						</InputForm>
						<InputForm
							htmlFor="email"
							type="email"
							id="email"
							placeholder="ingresa tu email"
							name="email"
						>
							Email
						</InputForm>

						<InputForm
							htmlFor="celular"
							type="tel"
							id="celular"
							placeholder="ingresa tu celular"
							name="celular"
						>
							celular
						</InputForm>
						<ButtonSubmit>Enviar</ButtonSubmit>
					</LoginForm>
				</Formik>
			</ContactContainer>
		</>
	);
};

export default Contact;
