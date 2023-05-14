export const gamesPlay = [
	{
		id: 1,
		name: 'DinoCrisis',
		price: 1500,
		img: 'https://media.vandal.net/m/12/dino-crisis-201610108599_1.jpg',
		desc: 'juego donde hay que escapar vivos de una isla llena de dinosaurios',
		genre: 'Accion',
		type: 'juegos',
	},
	{
		id: 2,
		name: 'DinoCrisis 2',
		price: 1500,
		img: 'https://assets-prd.ignimgs.com/2022/03/14/dinocrisis2-1647233333982.jpg',
		desc: 'juego donde hay que escapar vivos de una isla llena de dinosaurios',
		genre: 'Accion',
		type: 'juegos',
	},
	{
		id: 3,
		name: 'winning eleven 2002',
		price: 1500,
		img: 'https://www.retroplace.com/pics/ps/packshots/67541--world-soccer-winning-eleven-2002.png',
		desc: 'juega al futbol con los mejores jugadores del mundo',
		genre: 'Deportes',
		type: 'juegos',
	},
	{
		id: 4,
		name: 'driver',
		price: 1500,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fvW0RknMS11Cm4nECMzo-Jknrd8__NKlUHXfZeb5gKfpCmP0-4ju4Tv_vUumZI2YEXI',
		desc: 'escapa de la policia y de tus enemigos',
		genre: 'carreras',
		type: 'juegos',
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
		name: 'winning eleven 2002',
		price: 1500,
		img: 'https://www.retroplace.com/pics/ps/packshots/67541--world-soccer-winning-eleven-2002.png',
		desc: 'corre mas rapido que el viento',
		genre: 'carreras',
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
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4v94g4_6ejdR1Rda3LoMsrVz_RxlK-bI9FvHpF5SRhcO_eJeqey1o0M2QPesxEINU4Q',
		desc: 'Ve con nuestro amigo vampiro',
		genre: 'consola',
	},
	{
		id: 9,
		name: 'remera playstation 1',
		price: 11500,
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4v94g4_6ejdR1Rda3LoMsrVz_RxlK-bI9FvHpF5SRhcO_eJeqey1o0M2QPesxEINU4Q',
		desc: 'Ve con nuestro amigo vampiro',
		genre: 'merch',
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
