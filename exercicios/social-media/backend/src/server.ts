import { testeFn } from './teste'

const testeFuncao = testeFn()

// importa classe Fastify
import Fastify from 'fastify'

// instanciar um objeto da classe fastify
const app = Fastify()

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { z } from 'zod'



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

app.get('/posts/title/:title', async (request) => {
    //define um objeto zod contendo o esquema de dados
    const titleParam = z.object({
        title: z.string()
    })
    //recupera o dado do frontend a partir do zod titleParam
    // converte o texto enviado pelo frontend para a varivel title
    const { title } = titleParam.parse(request.params)

    const posts = await prisma.post.findMany({
        where: {
            title: {
                startsWith: title
            }
        }
    })
    return posts
})

//rota para criar um post, adição de um post no Banco - verbo post
app.post('/post', async (request) => {
    //define um objeto zod contendo o esquema de dados
    const postBody = z.object({
        title: z.string(),
        content: z.string(),
        published: z.boolean()
    })

    const { title, content, published } = postBody.parse(request.body)

    const newPost = await prisma.post.create({
        data: {
            title: title,
            content: content,
            published: published
        }
    })

    return newPost
})



// subir o servidor HTTP
app.listen({
    port: 3333
})
    .then(() => {
        console.log('Http Server running')
    })
