const {getPre,postPre,putPre,deletePre, getPreOne} = require('../controller/pre-eclampsiaController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getPre)

route.post('/',postPre)

route.put('/:id',putPre)

route.get('/:id',getPreOne)

route.delete('/:id',deletePre)

module.exports = route
