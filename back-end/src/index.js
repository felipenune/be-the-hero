const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

/*
GET: buscar informacoes no back-end
POST: mandar informacoes pro back-end
PUT: atualizar informacoes no back-end
DELETE: deletar informacoes do back-end 
*/

/*TIPOS DE PARAMETROS:

Query: parametros nomeados enviados na rota apos o "?" (filtros, paginacao)
Route: parametros utilizados para identificar recursos
Request Body: Corpos da requisição, utilizado para criar ou alterar recursos
*/

app.listen(3333);