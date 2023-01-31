const express = require('express')
const userController = require('../controller/userController')

const router = express.Router() // cria uma instância de um objeto roteador

router.route('/').get(userController.getAllUser).post(userController.CreateUser)
router.route('/:id').get(userController.getUser).patch(userController.UpdateUser).delete(userController.DeleteUser)

module.exports = router;