const mongoose = require('mongoose')

const TourSchema = new mongoose.Schema({ // objeto que descreve o formato de um documento no MongoDB
    name: {
        type: String,
        required: [true, "O passeio deve ter um nome."],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "O passeio deve ter um preço."]
    },
    rating: {
        type: Number,
        required: true,
        default: 4.5 // padroniza caso não seja especificado
    }
})

const Tour = mongoose.model('Tour', TourSchema); // converter nosso TourSchema um modelo com o qual possamos trabalhar.

module.exports = Tour
