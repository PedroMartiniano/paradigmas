import { testeFn } from './teste'
// importa classe Fastify
import Fastify from 'fastify'
// instanciar um objeto da classe fastify
const app = Fastify()

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

// subir o servidor HTTP
app.listen({
    port: 3333
})
    .then(() => {
        console.log('Http Server running')
    })
