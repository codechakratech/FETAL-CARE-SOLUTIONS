const {getPas,postPas,putPas,deletePas, getPasOne} = require('../controller/pasController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getPas)

route.post('/', postPas)

route.put('/:id', putPas)

route.get('/:id', getPasOne)

route.delete('/:id', deletePas)

module.exports = route

