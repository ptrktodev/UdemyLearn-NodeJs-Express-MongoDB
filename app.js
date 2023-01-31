const express = require('express')
const app = express() // add a função 

const morgan = require('morgan')// permite registrar informações sobre as solicitações feitas à sua aplicação
const tourRouter = require('./routes/tourRoutes.js')
const userRouter = require('./routes/userRoutes.js')

// MIDDLEWARES -----------------------------

/* app.use() é usado para adicionar middlewares e rotas para a  sua aplicação express. */ 

app.use(express.json()) // usado para adicionar middlewares à sua aplicação. Um middleware é uma função que é executada entre a requisição e a resposta

console.log(process.env.NODE_ENV + ' ✌')
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny')) // permite registrar informações sobre as solicitações feitas à sua aplicação
}

app.use(express.static('./public')) // middleware que é integrado ao express e que permite indicar onde estarão os arquivos estáticos a serem carregados

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    console.log(req.requestTime)
    next()
})

// ROUTES -----------------------------

app.use('/api/v1/tour', tourRouter) // passa o roteador na rota da  aplicação
app.use('/api/v1/users', userRouter) // passa o roteador na rota da  aplicação

// LISTEN -----------------------------

module.exports = app
