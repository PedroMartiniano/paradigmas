import { testeFn } from './teste'
// importa classe Fastify
import Fastify from 'fastify'

// instanciar um objeto da classe fastify
const app = Fastify()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const testeFuncao = testeFn()

// criar uma rota de API com o verbo GET - consulta
app.get('/hello', () => {
    return 'Hello world, good night'
})

app.get('/teste', () => {
    return "estou testando, me diga se está certo"
})

app.get('/funcao', () => {
    return `Valor da média: ${testeFuncao}`
})

// rota para listar os posts cadastrados no banco de dados
app.get('/posts', async () => {
    // await indica que a função somente continua depois que os dados vierem do BD
    const posts = await prisma.post.findMany()
    return posts
})

app.get('posts/title', async () => {
    const posts = await prisma.post.findMany({
        where: {
            title: {
                startsWith: "Aula"
            }
        }
    })
    return posts
})

// subir o servidor HTTP
app.listen({
    port: 3333
})
    .then(() => {
        console.log('Http Server running')
    })
