const express = require("express")
const router = express.Router()

const app = express()

const porta = 2020

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'linkimagem',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'Linkimagem',
        minibio: 'Fundadora da PrograMaria'
    }
]
function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)