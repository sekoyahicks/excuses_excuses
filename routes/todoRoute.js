const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController')

router.get('/', todoController.index)
router.post('/', todoController.create)
router.get('/:id', todoController.show)
router.patch('/:id', todoController.update)
router.delete('/:id', todoController.delete)


module.exports = router;