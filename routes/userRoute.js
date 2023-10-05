const {register,login,getUser, putUser, deleteUser} = require('../controller/userController')

const route = require('express').Router()

route.post('/',register)

route.post('/login',login)

route.get('/',getUser)

route.put('/:id',putUser)

route.delete('/:id',deleteUser)

module.exports = route