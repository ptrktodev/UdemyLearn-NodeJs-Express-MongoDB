const express = require('express')
const tourController = require('../Controller/tourController.js')

const router = express.Router() // cria uma instância de um objeto roteador

router.param('id', tourController.checkID) // Adiciona gatilhos de retorno de chamada aos parâmetros de rota, onde nameé o nome do parâmetro 

router.route('/').get(tourController.getAllTour).post(tourController.CheckBody, tourController.postCreateTour) // Refactoring
router.route('/:id').get(tourController.getTourID).patch(tourController.UpdateTour).delete(tourController.DeleteTour) // Refactoring

module.exports = router