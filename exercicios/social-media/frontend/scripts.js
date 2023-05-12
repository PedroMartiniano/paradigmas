async function consultaPosts() {

    const posts = await fetch('http://localhost:3333/posts')
        .then(resposta => {
            return resposta.json()
        })
    let conteudoTabela = ''

    //percorrendo cada post presente em posts
    posts.forEach(post => {
        conteudoTabela += `<tr> <td> ${post.id} </td> <td> ${post.title} </td> <td> ${post.content} </td> <td> ${post.published} </td> </tr>`
    })

    document.getElementById("corpoTabela").innerHTML = conteudoTabela
}