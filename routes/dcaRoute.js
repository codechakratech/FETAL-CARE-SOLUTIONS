const {getDca,postDca,putDca,deleteDca, getDcaOne} = require('../controller/dcaController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getDca)

route.post('/',postDca)

route.put('/:id',putDca)

route.get('/:id',getDcaOne)

route.delete('/:id',deleteDca)


module.exports = route
