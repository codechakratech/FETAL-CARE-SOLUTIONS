const {getDca,postDca,putDca,deleteDca} = require('../controller/dcaController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getDca)

route.post('/',auth,postDca)

route.put('/:id',auth,putDca)

route.delete('/:id',auth,deleteDca)


module.exports = route