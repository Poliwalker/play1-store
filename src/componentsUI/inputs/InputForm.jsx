import React from 'react';
import {
	InputContainerStyle,
	InputErrorStyle,
	InputStyle,
	LabelStyle,
} from './InputFormStyled';

const InputForm = ({ htmlFor, type, id, placeholder, children }) => {
	return (
		<InputContainerStyle>
			<LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
			<InputStyle type={type} placeholder={placeholder} id={id} />
			{/* <InputErrorStyle>error</InputErrorStyle> */}
		</InputContainerStyle>
	);
};

export default InputForm;
