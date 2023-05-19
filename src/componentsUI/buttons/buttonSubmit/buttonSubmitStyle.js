import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonSubmit = styled(motion.button)`
	padding: 0.4rem 1.2rem;
	border: none;
	border-radius: 0.4rem;
	background-color: #1e90ff;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 600;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
