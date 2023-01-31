const Tour = require('../models/tourModels.js')

// -------------------------------------------------

exports.getAllTour = (req, res) => {
    
    res.status(200)
    res.json({status : 'success', data: { tour : '<Update here...>' }})

}

exports.getTourID = (req, res) => {

    res.status(200)
    res.json({status : 'success', data: { tour : '<Update here...>' }})
 
}

exports.postCreateTour = async (req, res) => {

    try {

        const newTour =  await Tour.create(req.body)
    
        res
            .status(200)
            .json({
                status: "Sucess",
                data: {
                    tour: newTour
                }
            })

        console.log(newTour)

    }catch (error) {

        res
            .status(400)
            .json({
                status: "Failed",
                message: error
            })

    }


}

exports.UpdateTour = (req, res) => {
    
    res.status(200)
    res.json({status : 'success', data: { tour : '<Update here...>' }})

}

exports.DeleteTour = (req, res) => {
    
    res.json({status : 'success', data: null})
    res.status(204)

} 