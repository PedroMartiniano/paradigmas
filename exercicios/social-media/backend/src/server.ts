// importa classe Fastify
import Fastify from 'fastify'

import { AppRoutes } from './routes'

//importa a dependencia cors
import cors from "@fastify/cors"

// instanciar um objeto da classe fastify
const app = Fastify()

//registra cors no server
app.register(cors)

app.register(AppRoutes)

// subir o servidor HTTP
app.listen({
    port: 3333
})
    .then(() => {
        console.log('Http Server running on port 3333')
    })
