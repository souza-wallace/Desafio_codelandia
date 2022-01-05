function load(){
    async function getPostsFromApi() {
        let url = 'https://60d94dabeec56d00174776a2.mockapi.io/api/v1/post'
        let res = await fetch(url) 
    
        let posts = await res.json()
        return posts;
     }     
    getPostsFromApi().then( posts => posts.map( post => {
        createCard(post.title,post.description,post.created_at,post.favorite)
    }))

    function createCard(title,description,createDate, isFavorite) {

        let data = new Date(createDate);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let creatAt = data.toLocaleString('pt-BR', options);        

        let conteudo = document.createElement('article')
        conteudo.classList.add('card')
        conteudo.innerHTML =
            `<div class="card-conteudo">                            
                            <header>
                                
                                <div class="top-area">
                                <p>${creatAt}</p>
                                <i class="far fa-heart"></i>
                                </div>
                                <div class="title-area">
                                    <h1>${title}</h1>
                                </div>
                                
                            </header>
                            <main class="descricao">
                                <p>
                                ${description}
                                </p>
                            </main>                           
            </div><br>`
        
    
        document.querySelector('#conteudo').append(conteudo)
    }
    getPostsFromApi()    
}
