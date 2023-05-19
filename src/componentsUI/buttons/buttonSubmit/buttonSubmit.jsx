import React from 'react';
import { ButtonSubmit } from './buttonSubmitStyle';

const ButtonSubmit = ({ children, onClick, disabled = false }) => {
	return (
		<ButtonSubmit type="submit" disabled={disabled} onClick={onClick}>
			{children}
		</ButtonSubmit>
	);
};

export default ButtonSubmit;
