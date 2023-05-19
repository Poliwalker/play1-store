import * as Yup from 'yup';
import { regexEmail } from '../utils/regex/regex';

export const loginValidationSchema = Yup.object({
	usuario: Yup.string().required('El usuario es obligatorio'),
	password: Yup.string().required('El password es obligatorio'),
});

export const contactValidationSchema = Yup.object({
	nombre: Yup.string().required('El nombre es obligatorio'),
	email: Yup.string()
		.matches(regexEmail, 'Mail no valido')
		.required('Campo requerido'),
	celular: Yup.string().required('El celular es obligatorio'),
});

export const registerValidationSchema = Yup.object({
	nombre: Yup.string().required('El nombre es obligatorio'),
	email: Yup.string()
		.matches(regexEmail, 'Mail no valido')
		.required('Campo requerido'),
	password: Yup.string().required('El password es obligatorio'),
});
