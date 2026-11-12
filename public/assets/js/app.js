// Constante que armazena os jogos cadastrados
const data = {
    "jogos":  [
        {
            "id": 1,
            "nome": "Brawl Stars",
            "descricao": "Batalhas 3x3 agitadas e batalha de último sobrevivente feitas para celular! Jogue com seus amigos ou sozinho em inúmeros modos de jogo em menos de três minutos. Desbloqueie e melhore vários Brawlers com habilidades Super, poderes de estrela e acessórios. Colecione visuais únicos para se destacar e tirar onda. Lute em ambientes variados dentro do universo Brawl!",
            "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Lndk81Sl_8O7TmPnK_qWFlEI97CJ4Dz1q0dLzEqE7iILgVslV2qyUtur0cw1IbkeZnYpxx4kxH1EbCPq7iubNyKl3PUcQVTFevSeKEU&s.jpg",
            "desenvolvedora": "Supercell",
            "generos": ["Multijogador", "Ação"],
            "plataformas": ["Android", "iOS"],
            "dataLancamento": "2018-12-12",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJS0r73CX28WN4YfPcWjWSKL4XitaD39L4yKuYfHB3awQVqIhhYnfSitw&s=10.jpg", "https://i.redd.it/hs0sb1ot23td1.jpeg", "https://img.utdstc.com/screen/387/c46/387c46e9a0a3934fec8f879b6dcea5e2f196173c834129d9f7ddc1a618ff0827:600", "https://m.media-amazon.com/images/M/MV5BNDlkYjZkMWMtZThhMi00MzJmLTgwOTUtZDljNzJlYjI2YTQ1XkEyXkFqcGc@._V1_.jpg", "https://preview.redd.it/new-ranked-is-trash-v0-49odc8zt0hzh1.png?auto=webp&s=e9506844175e175f69edfebd984dd46f20d5e10f"],
            "destaque": true
        },
        {
            "id": 2,
            "nome": "Roblox",
            "descricao": "Roblox é uma plataforma de jogos online e um sistema de criação de jogos desenvolvido pela Roblox Corporation que permite aos usuários programar e jogar jogos criados por eles próprios ou por outros usuários.",
            "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznrLqIHPl_FWRxR1RHrI1fxhPJYTKvO8ZrE0mp3slQBLae7Aa70R8ZypHORNpPiAZcu_F6tx5hofrHkMOzf750_GU8VZs4pY03ludGA&s=10",
            "desenvolvedora": "Roblox Corporation",
            "generos": ["RPG", "Aventura", "Simulação", "Terror", "Ação", "Multijogador"],
            "plataformas": ["Android", "iOS", "Windows", "Xbox One", "macOS", "PlayStation 4", "PlayStation 5"],
            "dataLancamento": "2006-09-01",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0jBe9dmHgD_6fMwW0ER0WdEFlXuh3aFzEsMc5YujBYg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkQ-6mFmJVFHTQGpq5G-5joJLStG8yP2vnMnrAmFwQbhGMsmABXQN51gE&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme01GRka1YeXYRWkSFuc9eX0QVMn1WMwcJ8AA-EMjOw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVMilWFxRFNnAhWj-ookDw2pWRp9Ec7XX-6K76ZIlOA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-oIp8EONUDvQ88GJpbwmKIdb93IYoHOmQOOEgqs-cE-FVhangrTT-QKb&s=10"],
            "destaque": true
        },
        {
            "id": 3,
            "nome": "Marvel Rivals",
            "descricao": "Marvel Rivals é um jogo eletrônico Hero shooter multijogador em terceira pessoa, desenvolvido e publicado pela empresa chinesa NetEase em parceria com a Marvel Games.",
            "capa": "https://i.ytimg.com/vi_webp/XSuj5KD17Xs/maxresdefault.webp",
            "desenvolvedora": "NetEase Games",
            "generos": ["Tiro", "Hero Shooter", "Multijogador"],
            "plataformas": ["PlayStation 5", "Windows", "Xbox Series X|S"],
            "dataLancamento": "2024-12-06",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQFrrhAUqZMzHmvkNHDhoKJ-9GzFgqYqcPrCKwmQf7cYAgkwjkzvsB8&s=10", "https://cdn.mos.cms.futurecdn.net/GiPpDVLyv5x4ya885STrRo.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP0LeoxVvYmM46DLrdJlmF15PAocjH_3PkseuyEtupmElMDkY8-97ihY&s=10", "https://cdn2.unrealengine.com/marvel-rivals-gameplay-1920x1080-a6062b61e4b5.jpg", "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2025/01/mister-fantastic-marvel-rivals-gameplay.jpg?w=1600&h=900&fit=crop"],
            "destaque": true
        },
        {
            "id": 4,
            "nome": "Genshin Impact",
            "descricao": "Genshin Impact é um jogo de RPG de ação de mundo aberto gratuito (free-to-play) desenvolvido pela miHoYo (hoje sob a marca HoYoverse). O jogo se passa no vasto mundo fantástico de Teyvat, onde os jogadores controlam o 'Viajante' em busca de seu irmão ou irmã perdido, explorando sete nações distintas governadas por deuses elementais conhecidos como Arcontes.",
            "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqp6g9e7ihOaJbml4dKu8F7ndly4H7DQZdvuiXwX-tw&s.jpg",
            "desenvolvedora": "HoYoverse",
            "generos": ["RPG", "Multijogador"],
            "plataformas": ["PlayStation 5", "Android", "iOS", "Windows", "Xbox Series X|S"],
            "dataLancamento": "2020-09-28",
            "imagens": ["https://i.pcmag.com/imagery/articles/0011VhJ38AwfUQlBjwzV2F9-1..v1602863308.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkQ-6mFmJVFHTQGpq5G-5joJLStG8yP2vnMnrAmFwQbhGMsmABXQN51gE&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStf45Ns6IkDtaPCn46UMO-1c-MbOwrqm6mJMKRN5T_xvLDmujg1sekXLA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2kPPNPM2HXqgHWiKma39yXtoCDkk1-_Ywc5cXB9AE20P1uCY82jU2d2J&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPEh1MuAxkZu4--ssQqGTb2ArvA_1dQBAvvcPWtExGEDjktB_K6HW-Fg&s=10"],
            "destaque": false
        },
        {
            "id": 5,
            "nome": "Cyberpunk 2077",
            "descricao": "Cyberpunk 2077 é um jogo de RPG de ação e ficção científica desenvolvido e publicado pela CD Projekt Red, lançado originalmente em dezembro de 2020. Ambientado em Night City, uma megalópole obsessiva por poder, glamour e modificações corporais, o jogador controla V, um mercenário fora da lei em busca de um implante único que carrega a chave para a imortalidade.",
            "capa": "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
            "desenvolvedora": "CD Projekt Red",
            "generos": ["RPG", "Tiro", "Aventura", "Jogador solo"],
            "plataformas": ["PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch 2", "Windows"],
            "dataLancamento": "2020-12-10",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3AvDB9wzWFZBFhp2FfFvEKnRPmtXPEGSa4Mewsetg2Ae2_RyhDnhKVBa&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JKw_XUTvzv6G-HUT2L4JwfKlQXTBAI3VYrWeKsyXnne3esB09VgGBQ4&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoSkAM98UJSCFDtd1_O8OAX2hNujfyMiAJnj2yTUu67mYf-9VFrqdI33c&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YRv7plTJg41yeg6LGl8cIQaR3aSkHiXwdhhWBTm3RsynKWMTp2sfcPQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScacrZJ6Qe0iV3Nq7566XU1IZMyqb-31cl8CD6rsaxyeQ4cVw-b-ntKxg&s=10"],
            "destaque": false
        },
        {
            "id": 6,
            "nome": "The Last of Us Part II",
            "descricao": "The Last of Us Part II é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment.",
            "capa": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1750959180.jpg",
            "desenvolvedora": "Naughty Dog",
            "generos": ["Ação", "Tiro", "Sobrevivência", "Jogador solo", "Aventura"],
            "plataformas": ["PlayStation 4", "Windows"],
            "dataLancamento": "2020-06-19",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwOknN-o4PGimloYtiSNwwoQngEi9-nJLAqOm6Sr-HLzrT-aDiRxhWSY&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKGNRxcTMEndeVP6DZ4_WNZIsUgm65_UIXqDWE-oUPA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtL6jbx3ki-DsynELAJq-zejh2ai5tEYmNtQxXSpjwxJtmCNbzFaoSxIw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREio2YvBpWl-8OyBXhqVMTgVqPBKmtwo3Ch_JNLIGs73FOnpN8qAC8zyY&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREsEbltzvjKK0y0G8t5Cv6wS8iFifp3cuiRg1dTGCkNUDTkC7lXy7QAs&s=10"],
            "destaque": false
        },
        {
            "id": 7,
            "nome": "Detroit: Become Human",
            "descricao": "O jogo se passa em Detroit, no ano de 2038, em um mundo onde androides humanoides superavançados convivem com os humanos. A trama acompanha três androides diferentes (Connor, Kara e Markus) que começam a desenvolver sentimentos, livre-arbítrio e consciência própria (tornando-se 'Divergentes'). Suas escolhas moldam completamente o destino da humanidade e dos androides.",
            "capa": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/capsule_616x353.jpg?t=1667468479.jpg",
            "desenvolvedora": "Quantic Dream",
            "generos": ["Drama", "Aventura", "Ficção Científica", "Jogador solo"],
            "plataformas": ["PlayStation 4", "Windows"],
            "dataLancamento": "2018-05-25",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCnkrmW-NgBoceLEgQyZBuV_pvcYYglL-wGZ-sRev47xCMBPmFSGUpU08&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUm4l8d7Hq7y2Qyh5jT6Opivk_1uo5XmnXk0FnwhNySxLHbvk8vDboUTY&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhkGVhGR1C80N7AJNcFdc1bBtHBGpATKWYASLorzt72vWNupsqluMUKWK&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmE0YyFBqYHDDjqJBWbyeFRwOLY4g00XMiYN0a_eHqM1kRFrS6QxsvzFET&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnx73jl_rnlQOW7qcDOoolglOm_CD4eYu0LaGX3iRdYzvW2bB4UEkUWIll&s=10"],
            "destaque": false
        },
        {
            "id": 8,
            "nome": "League of Legends: Wild Rift",
            "descricao": "League of Legends: Wild Rift é um jogo eletrônico do gênero MOBA desenvolvido e publicado pela Riot Games para Android e iOS. O jogo é uma versão para aparelhos móveis adaptada de seu equivalente para PC, League of Legends.",
            "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIq3mlBJUD8JcCgWJKByGq5Y8mbGcc2vhkdUWlPcyq3vIbyj7f7LzYs0K&s=10.jpg",
            "desenvolvedora": "Riot Games",
            "generos": ["MOBA", "Multijogador"],
            "plataformas": ["Android", "iOS"],
            "dataLancamento": "2021-03-29",
            "imagens": ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJnPV0U8yUBw2x9jonBkkO9O9a25QjdyfSM-VtnQ4AW38ifPF0fwz4oN8MzgJJCfHv7En8zrAO7_cjCNGLPfraqyDe76GSxG2JY-DRPECmQPKkOF0j4hSkLAAZnS8RErOqT3Hl6vLs9BI/s1280/WRR.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJPMoB7K_3uewkYxwaLelPFpZ8oeJ8vEHKErWc6RhMg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvKwe1kpnW-KYb3--dBx8FkjN8xQGcT1pgDHbjIYGDooHLM4bhoOuRhwm&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXl-oFYgdPiOBZ8k5roo7_jfc9pUmyV_JWkY8orz6uaSfMdUZUF_arL82&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmG1ABfM-xc8N-KnuF257q7dCOjQZ1KIwtC6EVNEJLQfnxMeOcqAvYOwTc&s=10"],
            "destaque": true
        },
        {
            "id": 9,
            "nome": "Valorant",
            "descricao": "Valorant é um jogo eletrônico de tiro tático em primeira pessoa focado no aspecto competitivo e de e-sports. As partidas colocam duas equipes de 5 jogadores (Atacantes contra Defensores) em combates onde a precisão de tiro precisa ser combinada com o uso estratégico de habilidades únicas de personagens (Agentes).",
            "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4W0DJtL2AijzogZ6FIYPdQvo_qPqPe9ybTTWp9xfGLKtozl-3QIOqIs&s=10.jpg",
            "desenvolvedora": "Riot Games",
            "generos": ["FPS", "Tiro", "Hero Shooter", "Multijogador"],
            "plataformas": ["PlayStation 5", "Xbox Series X|S", "Windows"],
            "dataLancamento": "2020-06-02",
            "imagens": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBxgMJAan80dN4t4jn0GqKDHzDMK0quA1azhxa8EsyiX2NK1fm8G6vz89&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVFn2aiEznVANruXoInUO9JvpXVI6vS5RNDPMl4i3tmzJJIpYYeoTH8vu&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebglrHGOHzW1PEoEuf0Ddh2NxWOk1A9MZhD0wyYfMyg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmZ5QBbMZBm_ouUNPUzLU3jpjnLRxd-OjApN0hWeJx9y79DnVkZGh7_w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrX_7l0rYDhPM6fzICIo7Uhyx_sU9AramOKKDU_gd-nI3O15j8Z-v1Ns&s=10"],
            "destaque": true
        }
    ]
};

//#region Área de Destaques

// selecionar os elementos html necessários
const listaDtq = document.querySelector(".carousel-inner"); 


//array filtrando apenas os jogos em destaque
const listaDestaques = data.jogos.filter(function(item){
    return item.destaque === true;
});

// função para criar os cards de destaque
function createCardDestaque(jogo, indice) {
    // variável referente ao card de destaque
    const cardDtq = document.createElement("div");
    cardDtq.setAttribute("data-id", jogo.id);
    cardDtq.classList.add("card-destaque");
    cardDtq.classList.add("carousel-item");
    if (indice === 0) {
        cardDtq.classList.add("active");
    }
    cardDtq.style.backgroundImage = `url("${jogo.capa}")`;
    listaDtq.appendChild(cardDtq);
    //título
    const tituloDtq = document.createElement("h3");
    tituloDtq.textContent = jogo.nome;
    cardDtq.appendChild(tituloDtq);
    //gêneros
    const generosDtq = document.createElement("div");
    cardDtq.appendChild(generosDtq);
    // forEach pra percorrer os gêneros do jogo
    jogo.generos.forEach(function(item) {
        const generoDtq = document.createElement("span");
        generoDtq.classList.add("genero-destaque")
        generoDtq.textContent = item;
        generosDtq.appendChild(generoDtq);
    });
}

// forEach para percorrer a lista de destaques e criar os cards
listaDestaques.forEach(function(item, indice) {
    createCardDestaque(item, indice);
});

//#endregion

//#region Lista de Jogos

// selecionar os elementos html necessários
const listaJogos = document.querySelector(".lista-jogos");

// função para criar os cards
function criarCard(jogo, coluna) {
    // variável referente aos cards de cada jogo
    const card = document.createElement("article");
    card.setAttribute("data-id", jogo.id);
    card.classList.add("card");
    card.classList.add("jogo");
    coluna.appendChild(card);
    // capa
    const imagem = document.createElement("img");
    imagem.src = jogo.capa;
    imagem.classList.add("card-img-top");
    card.appendChild(imagem);
    // corpo do card
    const corpoCard = document.createElement("div");
    corpoCard.classList.add("card-body");
    card.appendChild(corpoCard);
    // título
    const titulo = document.createElement("h3");
    titulo.textContent = jogo.nome;
    titulo.classList.add("card-title");
    corpoCard.appendChild(titulo);
    // generos
    const divGeneros = document.createElement("div");
    divGeneros.classList.add("generos-card");
    // forEach para percorrer os gêneros do jogo, criando um elemento HTML pra cada
    jogo.generos.forEach(function(item) {
        const genero = document.createElement("span");
        genero.textContent = item;
        genero.classList.add("genero-destaque");
        genero.classList.add("badge", "rounded-pill");
        divGeneros.appendChild(genero);
    })
    corpoCard.appendChild(divGeneros);
    // botão para a página de detalhes
    const btnDtls = document.createElement("button");
    btnDtls.textContent = "Ver Detalhes";
    btnDtls.classList.add("btn", "botao-detalhes");
    corpoCard.appendChild(btnDtls);

    // evento para funcionamento do botão
    btnDtls.addEventListener("click", function() {
        window.location.href = `detalhes.html?id=${jogo.id}`;
    })
}

// forEach que percorre toda a lista de jogos, criando todos os cards e adicionando a div 'coluna'
data.jogos.forEach(function(item) {
    const coluna = document.createElement("div");
    coluna.classList.add("col-12", "col-md-6", "col-lg-4");
    listaJogos.appendChild(coluna);
    criarCard(item, coluna);
})
//#endregion
