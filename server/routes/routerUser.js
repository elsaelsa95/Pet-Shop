const router = require('express').Router()
const Controller = require('./../controller/user');

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.get('/:id', Controller.detail)
router.put('/:id', Controller.edit)
router.delete('/:id', Controller.delete)

module.exports = router