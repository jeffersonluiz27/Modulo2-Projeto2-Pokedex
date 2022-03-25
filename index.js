const express = require('express'); //Importação do modulo Express
const app = express(); //Referencia para chamar Express
const path = require('path'); //Nescessario para adicionar arquivos estátivos.

const port = process.env.PORT || 3000; //Porta do servidor
let message = ''; //Mensagem de sucesso cadastro

const pokedex = [
	{
		id: 1,
		numero: 1,
		nome: 'Bulbasaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
		descricao:
			'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
		altura: `2' 04"`,
		peso: '15.2 lbs',
		categoria: 'Seed',
		habilidade: 'Overgrow',
	},
	{
		id: 2,
		numero: 2,
		nome: 'Ivysaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
		descricao:
			'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
		altura: `3' 03"`,
		peso: '28.7 lbs',
		categoria: 'Seed',
		habilidade: 'Overgrow',
	},
	{
		id: 3,
		numero: 3,
		nome: 'Venusaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
		descricao:
			'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
		altura: `6' 07"`,
		peso: '220.5 lbs',
		categoria: 'Seed',
		habilidade: 'Overgrow',
	},
];

app.set('view engine', 'ejs'); //Definindo o Motor de visualização
app.use(express.static(path.join(__dirname, 'public'))); //Indicando diretorio dos arquivos estáticos
app.use(express.urlencoded());

app.get('/', (req, res) => {
	setTimeout(() => {
		message = '';
	}, 5000);

	res.render('index', { pokedex, message });
}); //Arquivo a ser renderizado dentro da views

app.get('/cadastro', (req, res) => {
	res.render('cadastro');
});

app.get('/detalhes/:id', (req, res) => {
	const id = +req.params.id;
	pokemon = pokedex.find((pokemon) => pokemon.id === id);
	res.render('detalhes', { pokemon });
});

app.post('/new', (req, res) => {
	const pokemon = req.body;
	pokemon.id = pokedex.length + 1;
	pokedex.push(pokemon);
	message = `Pokemon ${pokemon.nome} cadastrado com sucesso!`;
	res.redirect('/');
});

app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
); //Liga o servidor na porta definida
