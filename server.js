const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

// console.log(process.env) // ferramenta utilizada para orquestrar as variáveis ambiente de um projeto

const app = require('./app')
const port = process.env.PORT

// mongoDB --------------------------------------

const pass = process.env.PASSWORD_DATABASE
const uri = process.env.DATABASE.replace('<pass>', pass);

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Connected DB')
    } catch (error) {
        console.log(`-> ${error}`)
    }
}

connectDB()

app.listen(port, () => {
    console.log(`App running on ${port} successfully`)
})

