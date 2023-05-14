import React from 'react';
import {
	IframeStyle,
	MainLocation,
	TextLocation,
	TitleLocation,
} from './LocationStyle';

const Location = () => {
	return (
		<MainLocation>
			<TextLocation>
				<TitleLocation>Ubicación</TitleLocation>
				<p>Nos ubicamos en Av Belgrano 1110 e/ salta y cochabamba</p>
				<p>lineas que te acercan: 60,39,45,91,17</p>
			</TextLocation>
			<div>
				<IframeStyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17531.73773505746!2d-58.38264522403849!3d-34.617035620225536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad74611e521%3A0x53f64a56ea1657c3!2sAv.%20Belgrano%201110%2C%20C1092AAY%20CABA!5e0!3m2!1ses-419!2sar!4v1683219362429!5m2!1ses-419!2sar"></IframeStyle>
			</div>
		</MainLocation>
	);
};

export default Location;
