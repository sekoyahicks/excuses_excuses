const express = require('express')
const router = express.Router()

const excuseController = require('../controllers/excuseController')

router.get('/', excuseController.index)
router.post('/', excuseController.create)
router.get('/:id', excuseController.show)
router.patch('/:id', excuseController.update)
router.delete('/:id', excuseController.delete)

module.exports = router;