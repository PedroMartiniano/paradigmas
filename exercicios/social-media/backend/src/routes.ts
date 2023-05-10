import { z } from 'zod'
import { prisma } from "./lib/prisma"
import { FastifyInstance } from 'fastify'

export async function AppRoutes(app: FastifyInstance) {

    // criar uma rota de API com o verbo GET - consulta
    app.get('/hello', () => {
        return 'Hello world, good night'
    })

    app.get('/teste', () => {
        return "estou testando, me diga se está certo"
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

    // rota para atualizar o conteúdo de um post
    app.patch('/post/content', async (request) => {
        //cria um obj zod para definir o esquema de dados
        const contentBody = z.object({
            id: z.number(),
            content: z.string()
        })
        //recupera os dados do frontend
        const { id, content } = contentBody.parse(request.body)
        // atualiza no banco de dados
        const postUpdated = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                content: content
            }

        })

        return postUpdated
    })

    app.patch('/post/published', async (request) => {
        const publishedBody = z.object({
            id: z.number(),
            published: z.boolean()
        })

        const { id, published } = publishedBody.parse(request.body)

        const postUpdated = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                published: published
            }
        })

        return postUpdated
    })

    app.delete('/post/:id', async (request) => {
        const idParam = z.object({
            id: z.string()
        })

        const { id } = idParam.parse(request.params)

        const idNumber = Number(id)

        const postDeleted = await prisma.post.delete({
            where: {
                id: idNumber
            }
        })

        return postDeleted
    })

    // rota para atualizar N campos de um post

    app.put('/posts/:id', async (request) => {
        // objeto zod para o parâmetro :id
        const idParam = z.object({
            id: z.string()
        })

        const putBody = z.object({
            "title": z.string(),
            "content": z.string()
        })

        const { id } = idParam.parse(request.params)
        const { title, content } = putBody.parse(request.body)

        const NumberId = Number(id)

        const repost = await prisma.post.updateMany({
            where: {
                id: NumberId,
                published: true
            },
            data: {
                title: title,
                content: content
            }
        })

        return (repost.count >= 1) ? "atualização com sucesso" : "Error"
    })

}