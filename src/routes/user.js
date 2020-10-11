const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.get('/:_id', UserController.show)
router.post('/', UserController.store)
router.put('/:_id', UserController.update)
router.delete('/:_id', UserController.destroy)

module.exports = router