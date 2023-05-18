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

async function confirmar() {

    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const published = document.getElementById("sim").Checked

    alert(published)
    const corpo = [title, content, published]

    const post = await fetch('http://localhost:3333/post', {
        method: 'POST',
        body: JSON.stringify(corpo),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
        .then(resposta => {
            alert('Operação realizada com sucesso')
        })
        .catch(error => {
            alert('Operação Falhou')
        })
        
        consultaPosts()

}