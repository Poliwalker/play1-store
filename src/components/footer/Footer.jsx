import React from 'react';
import {
	FooterContainer,
	FooterLinksContainer,
	FooterLinksLegals,
	FooterLogo,
	FooterLogoContainer,
	ListLegals,
	SocialItem,
	SocialList,
	UbicationFooter,
} from './footerStyle';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterLogoContainer>
					<FooterLogo
						src="https://icon-library.com/images/playstation-logo-icon/playstation-logo-icon-8.jpg"
						alt="logo"
					/>
					<a href="#">Inicio</a> <p>PlayStation1 Tienda</p>
				</FooterLogoContainer>
				<FooterLinksContainer>
					<ul>
						<li>Acerca de Play 1 AR</li>
						<li>Historia</li>
						<li>Querés trabajar con nosotos?</li>
						<li>Reseñas</li>
					</ul>
					<ul>
						<li>Play 1</li>
						<li>Juegos</li>
						<li>Consolas</li>
						<li>Accesorios</li>
					</ul>
					<SocialList>
						<SocialItem>
							<GrFacebook />
						</SocialItem>
						<SocialItem>
							<BsInstagram />
						</SocialItem>
						<SocialItem>
							<GrTwitter />
						</SocialItem>
						<SocialItem>
							<BsYoutube />
						</SocialItem>
					</SocialList>
					<div className="location">
						<p>Ubicacion</p>
					</div>
				</FooterLinksContainer>
				<FooterLinksLegals>
					<UbicationFooter>
						<p>Earth</p> Country: Región: Argentina
					</UbicationFooter>
					<ListLegals>
						<li>Legal</li>
						<li>Politica de privacidad</li>
						<li>Terminos de uso del sitio web</li>
						<li>Mapa del sitio</li>
					</ListLegals>
				</FooterLinksLegals>
			</FooterContainer>
		</>
	);
};

export default Footer;
