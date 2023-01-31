const express = require('express')
const tourController = require('../controller/tourController.js')

const router = express.Router() // cria uma instância de um objeto roteador

router.route('/').get(tourController.getAllTour).post(tourController.postCreateTour) // Refactoring
router.route('/:id').get(tourController.getTourID).patch(tourController.UpdateTour).delete(tourController.DeleteTour) // Refactoring

module.exports = router