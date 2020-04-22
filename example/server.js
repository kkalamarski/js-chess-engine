import fastify from 'fastify'
import * as cors from 'fastify-cors'
import { getMoves } from '../lib/js-chess.js'

const server = fastify({
    logger: true
}).register(cors.default)

server.post('/moves', (request, response) => {
    try {
        const result = getMoves(request.body)
        response.send(result)
    } catch (error) {
        response.code(404).send(error)
    }
})

server.listen(8000)