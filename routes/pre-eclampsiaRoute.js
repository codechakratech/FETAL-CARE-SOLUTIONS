const {getPre,postPre,putPre,deletePre} = require('../controller/pre-eclampsiaController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getPre)

route.post('/',auth,postPre)

route.put('/:id',auth,putPre)

route.delete('/:id',auth,deletePre)

module.exports = route