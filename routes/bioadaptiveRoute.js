const {getBioadaptive,postBioadaptive,putBioadaptive,deleteBioadaptive, getBioadaptiveOne} = require('../controller/bioadaptiveController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.get('/',getBioadaptive)

route.post('/', postBioadaptive)

route.put('/:id', putBioadaptive)

route.get('/:id', getBioadaptiveOne)

route.delete('/:id', deleteBioadaptive)

module.exports = route

