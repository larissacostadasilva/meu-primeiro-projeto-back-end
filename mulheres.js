const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    { 
        nome:'Larissa Costa da Silva',
        imagem: 'https://docs.github.com/assets/cb-410072/mw-1000/images/help/repository/social-preview.webp',
        minibio: "Estudante de Ciências Sociais e Programação"  
    },

    {
        nome: 'Iana Chan',
        Imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da Programaria'
    },

    {
        nome:'Nina da Hora',
        imagem:'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)