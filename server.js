const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app')
const port = process.env.PORT

// console.log(process.env) // ferramenta utilizada para orquestrar as variáveis ambiente de um projeto

const pass = process.env.PASSWORD_DATABASE

const uri = `mongodb+srv://patrickUserDB:${pass}@cluster0.nzj2anz.mongodb.net/natours-app?retryWrites=true&w=majority`;

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

