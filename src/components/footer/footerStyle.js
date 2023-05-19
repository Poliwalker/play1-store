import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	background-color: #0070cc;
	display: flex;
	flex-direction: column;
	padding: 20px 50px;
`;

export const FooterLogoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 20px;
	margin-bottom: 30px;
	border-bottom: 1px solid grey;
`;

export const FooterLogo = styled.img`
	width: 100px;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 30px;
`;
export const SocialList = styled.ul`
	display: flex;
	gap: 20px;
	justify-content: center;
`;

export const SocialItem = styled.li`
	font-size: 30px;
	cursor: pointer;
`;

export const FooterLinksLegals = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid grey;
	padding-top: 20px;
	@media (max-width: 578px) {
		width: 100%;
		flex-direction: column;
	}
`;

export const UbicationFooter = styled.div`
	display: flex;
	gap: 20px;
`;

export const ListLegals = styled.ul`
	display: flex;
	justify-content: space-around;
	gap: 20px;
	width: 100%;
`;
