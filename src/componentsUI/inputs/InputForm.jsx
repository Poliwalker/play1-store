import React from 'react';

import { ErrorMessage, Field } from 'formik';
import {
	InputContainerStyle,
	InputErrorStyle,
	InputStyle,
} from './InputFormStyled';

const InputForm = ({ type, placeholder, name }) => {
	return (
		<Field name={name}>
			{({ field, form: { touched, errors } }) => (
				<InputContainerStyle>
					<InputStyle
						type={type}
						placeholder={placeholder}
						{...field}
						isError={errors[field.name] && touched[field.name]}
					/>
					<ErrorMessage name={field.name}>
						{(message) => <InputErrorStyle>{message}</InputErrorStyle>}
					</ErrorMessage>
				</InputContainerStyle>
			)}
		</Field>
	);
};

export default InputForm;
