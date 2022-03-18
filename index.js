const express = require('express'); //Importação do modulo Express
const app = express(); //Referencia para chamar Express
const path = require('path'); //Nescessario para adicionar arquivos estátivos.

const port = process.env.PORT || 3000; //Porta do servidor

app.set('view engine', 'ejs'); //Definindo o Motor de visualização
app.use(express.static(path.join(__dirname, 'public'))); //Indicando diretorio dos arquivos estáticos

app.get('/', (req, res) => {
	res.render('index');
}); //Arquivo a ser renderizado dentro da views

app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
); //Liga o servidor na porta definida
