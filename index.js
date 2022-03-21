const express = require('express'); //Importação do modulo Express
const app = express(); //Referencia para chamar Express
const path = require('path'); //Nescessario para adicionar arquivos estátivos.

const port = process.env.PORT || 3000; //Porta do servidor

const pokedex = [
	{
		id: 1,
		nome: 'Bulbasaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
		descricao:
			'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
		Autura: `2' 04"`,
		Peso: '15.2',
		Categoria: 'Seed',
		Habilidade: 'Overgrow',
	},
	{
		id: 2,
		nome: 'Ivysaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
		descricao:
			'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
		Autura: `3' 03"`,
		Peso: '28.7',
		Categoria: 'Seed',
		Habilidade: 'Overgrow',
	},
	{
		id: 3,
		nome: 'Venusaur',
		tipo: 'Grass',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
		descricao:
			'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
		autura: `6' 07"`,
		peso: '220.5',
		categoria: 'Seed',
		habilidade: 'Overgrow',
	},
];

app.set('view engine', 'ejs'); //Definindo o Motor de visualização
app.use(express.static(path.join(__dirname, 'public'))); //Indicando diretorio dos arquivos estáticos

app.get('/', (req, res) => {
	res.render('index', { pokedex });
}); //Arquivo a ser renderizado dentro da views

app.get('/cadastro', (req, res) => {
	res.render('cadastro');
});

app.post('/add', (req, res) => {});

app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
); //Liga o servidor na porta definida
