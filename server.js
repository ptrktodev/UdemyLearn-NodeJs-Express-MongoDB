const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app')
const port = process.env.PORT

// console.log(process.env) // ferramenta utilizada para orquestrar as variáveis ambiente de um projeto

app.listen(port, () => {
    console.log(`App running on ${port} successfully`)
})

