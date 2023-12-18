function getArticleGenerator(articles) {
    let myArticles = Array.from(articles)
    let content = document.getElementById('content')
    return () => {
        if (!myArticles.length){
            return
        }
        let currentLine = myArticles.shift()
        content.innerHTML += `<article>${currentLine}</article>`
    }
}