const {getPas,postPas,putPas,deletePas} = require('../controller/pasController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getPas)

route.post('/',auth, postPas)

route.put('/:id',auth, putPas)

route.delete('/:id',auth, deletePas)

module.exports = route

