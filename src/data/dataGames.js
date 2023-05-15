export const gamesPlay = [
	{
		id: 1,
		name: 'dinoCrisis 1',
		price: 1500,
		img: 'https://media.vandal.net/m/12/dino-crisis-201610108599_1.jpg',
		desc: 'juego donde hay que escapar vivos de una isla llena de dinosaurios',
		genre: 'accion',
	},
	{
		id: 2,
		name: 'dinoCrisis 2',
		price: 1500,
		img: 'https://assets-prd.ignimgs.com/2022/03/14/dinocrisis2-1647233333982.jpg',
		desc: 'juego donde hay que escapar vivos de una isla llena de dinosaurios',
		genre: 'accion',
	},
	{
		id: 3,
		name: 'winning eleven 2002',
		price: 1500,
		img: 'https://www.retroplace.com/pics/ps/packshots/67541--world-soccer-winning-eleven-2002.png',
		desc: 'juega al futbol con los mejores jugadores del mundo',
		genre: 'deportes',
	},
	{
		id: 4,
		name: 'driver 1',
		price: 1500,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fvW0RknMS11Cm4nECMzo-Jknrd8__NKlUHXfZeb5gKfpCmP0-4ju4Tv_vUumZI2YEXI',
		desc: 'escapa de la policia y de tus enemigos',
		genre: 'carreras',
	},
	{
		id: 5,
		name: 'Driver 2',
		price: 1500,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd5h5GsX3w9RgTViowcWb_1WLNHR5CNHQjnaNuojtHNAwWHdaLN051AAjgyr9KddywMQ',
		desc: 'escapa de la policia y de tus enemigos otra vez',
		genre: 'carreras',
	},
	{
		id: 6,
		name: 'fifa 98',
		price: 1500,
		img: 'https://m.media-amazon.com/images/I/41AAJQA4D3L._AC_.jpg',
		desc: 'juega con los de antes',
		genre: 'deportes',
	},
	{
		id: 7,
		name: 'Jersey Devil',
		price: 1500,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4v94g4_6ejdR1Rda3LoMsrVz_RxlK-bI9FvHpF5SRhcO_eJeqey1o0M2QPesxEINU4Q',
		desc: 'Ve con nuestro amigo vampiro',
		genre: 'aventura',
	},
	{
		id: 8,
		name: 'consola playstation 1',
		price: 11500,
		img: 'https://http2.mlstatic.com/D_NQ_NP_869142-MLA32731749132_112019-O.jpg',
		desc: 'juega hasta el amanecer',
		genre: 'consola',
	},
	{
		id: 9,
		name: 'remera playstation 1',
		price: 6500,
		img: 'https://arsonyb2c.vtexassets.com/arquivos/ids/361613/Remera-Playstation-Negra-45--1000x1000-.jpg?v=1770358476',
		desc: 'la nostalgia en tu piel',
		genre: 'merch',
	},
	{
		id: 10,
		name: 'Syphon Filter 1',
		price: 1500,
		img: 'https://i.psnprofiles.com/guides/14673/326e3b.jpg',
		desc: 'guerra y misiones imposibles',
		genre: 'guerra',
	},
	{
		id: 11,
		name: 'Syphon Filter 2',
		price: 1500,
		img: 'https://upload.wikimedia.org/wikipedia/en/4/40/Syphon_Filter.jpg',
		desc: 'guerra y misiones imposibles',
		genre: 'guerra',
	},
	{
		id: 12,
		name: 'Syphon Filter 3',
		price: 1500,
		img: 'https://m.media-amazon.com/images/I/512J3B357BL._AC_SX466_.jpg',
		desc: 'guerra y misiones imposibles',
		genre: 'guerra',
	},
];

export const TotalProducts = gamesPlay.length;

export const GamesPlay = gamesPlay.reduce((acc, game) => {
	if (!acc[game.genre]) {
		acc[game.genre] = [];
	}

	acc[game.genre] = [...acc[game.genre], game];

	return acc;
}, {});

console.log(Object.entries(GamesPlay));
