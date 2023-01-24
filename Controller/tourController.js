const fs = require('fs')

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json')) // usado para converter dados recebidos no formato JSON para um objeto JavaScript que pode ser manipulado pelo código.

// MIDDLEWARES -------------------------------------------------

exports.checkID = (req, res, next, value) => {
    console.log(value)
    if(req.params.id * 1 > tours.length - 1) {
        return res.status(400).json({ 
            error: 'ID invalido' 
        })
    }
    next()
}

exports.CheckBody = (req, res, next) => {
    console.log(req.body)

    if (!req.body.name || !req.body.price) {
        return res.status(400).json({ 
            error: 'Dados inválidos' 
        })
    }

    next()
}

// -------------------------------------------------

exports.getAllTour = (req, res) => {
    
    res.status(200)
    res.json({
        status : 'Success',
        requestTime : req.requestTime,
        results : tours.length - 1,
        data : {
            tours
        }
    })
}
exports.getTourID = (req, res) => {

    const id = req.params.id * 1 //  representa os parâmetros de rota capturados na URL da requisição. 
    const tour = tours.find(el => el.id === id) // usado para encontrar o primeiro elemento de um array que satisfaz uma determinada condição.

    //console.log(tours.length)
    //console.log(typeof(req.params.id)) // = string


    res.status(200)
    res.json({status : 'success', data: { tour : tour }})



 
}
exports.postCreateTour = (req, res) => {

    const newID = tours[tours.length - 1].id + 1
    const newTour = Object.assign({id: newID}, req.body) // usado para copiar as propriedades de um ou mais objetos de origem para um objeto de destino.

    tours.push(newTour) // método do JavaScript que é usado para adicionar um ou mais elementos ao final de um array 

    fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), () => { // JSON.stringify() = converte um objeto JavaScript em uma string no formato JSON
    
        res.json({
            status: 'Success', 
            data: {
                tour: newTour
            }
        })})
}
exports.UpdateTour = (req, res) => {
    
    res.status(200)
    res.json({status : 'success', data: { tour : '<Update here...>' }})

}
exports.Deleteour = (req, res) => {
    
    res.json({status : 'success', data: null})
    res.status(204)

} 