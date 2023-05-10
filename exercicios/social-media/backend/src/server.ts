// importa classe Fastify
import Fastify from 'fastify'

import { AppRoutes } from './routes'

// instanciar um objeto da classe fastify
const app = Fastify()

app.register(AppRoutes)

// subir o servidor HTTP
app.listen({
    port: 3333
})
    .then(() => {
        console.log('Http Server running on port 3333')
    })
