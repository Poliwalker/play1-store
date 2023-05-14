import React from 'react';
import InputForm from '../../componentsUI/inputs/InputForm';
import { ContactContainer } from './ContactStyle';

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<h1>Contacto</h1>
				<p>Deje sus datos para poder mandarle las ofertas</p>
				<form action="">
					<InputForm
						htmlFor="nombre"
						type="text"
						id="nombre"
						placeholder="ingresa tu nombre"
					>
						Nombre
					</InputForm>
					<InputForm
						htmlFor="email"
						type="email"
						id="email"
						placeholder="ingresa tu email"
					>
						Email
					</InputForm>

					<InputForm
						htmlFor="celular"
						type="tel"
						id="celular"
						placeholder="ingresa tu celular"
					>
						celular
					</InputForm>
				</form>
			</ContactContainer>
		</>
	);
};

export default Contact;
