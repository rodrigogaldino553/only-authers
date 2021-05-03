const iframe = document.querySelector('.video-class .video')
const title = document.querySelector('.video-class h3')
const description = document.querySelector('.video-class h6')

const classes = [{
    class: 0, src: 'https://www.youtube.com/embed/ghTrp1x_1As', title: 'Aula 01 - O Que É API Rest?', description: 'Vamos aprender aqui sobre Application Programming Interface (API), Representational State Transfer (REST) e a criar uma pequena API de clientes com NodeJS e o Express (que será o responsável em criar nosso server) seguindo os padrões REST para você ter uma API RESTFUL.'
}, {
    class: 1, src: 'https://www.youtube.com/embed/BN_8bCfVp88', title: 'Aula 02 - Construindo uma API', description: 'Nessa aula explico os primeiros conceitos do NodeJS + Express, criamos uma estrutura de pastas, conectamos ao MongoDB, criamos nosso primeiro model, controller e rota para cadastro de usuário com senha criptografada. '
}, {
    class: 2, src: 'https://www.youtube.com/embed/KKTX1l3sZGk', title: 'Aula 03 - Autenticação com JWT', description: 'Nessa aula vamos autenticar o usuário retornando um token JWT para validar o login em futuras requisições.'
}, {
    class: 3, src: 'https://www.youtube.com/embed/Zwdv9RllPqU', title: 'Aula 04 - Recuperação de Senha', description: 'Nessa aula nós ajeitamos a estrutura de pastas e configuramos a recuperação de senha para o usuário.'
}, {
    class: 4, src: 'https://www.youtube.com/embed/GAZdUyIV3ms', title: 'Aula 05 - Implementando "CRUD"', description: 'Nessa aula nós criamos os models e relacionamentos entre usuários, projetos e tarefas. Também criamos todas operações CRUD de projetos e tarefas.'
}]


function setClass(value) {
    const link = classes[value].src

    iframe.innerHTML = `<iframe width="640px" height="360px" src="${link}" title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe >`

    title.innerHTML = classes[value].title
    description.innerHTML = classes[value].description
}



