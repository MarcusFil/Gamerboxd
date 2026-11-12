// recuperar o ID da URL
const parametros = new URLSearchParams(window.location.search);
const idJogo = Number(parametros.get("id"));

// encontrar o jogo selecionado
const jogoSelecionado = data.jogos.find(function(item) {
    return item.id === idJogo;
});

// teste condicional para verificar se o jogo selecionado existe
if (jogoSelecionado) {
    // Capa
    const capa = document.getElementById("capa");
    capa.src = jogoSelecionado.capa;
    capa.alt = `Capa de ${jogoSelecionado.nome}`;
    // Nome
    document.getElementById("nome").textContent = jogoSelecionado.nome;
    // Desenvolvedora
    document.getElementById("desenvolvedora").textContent = jogoSelecionado.desenvolvedora;
    // Data de lançamento
    const dataLancamento = new Date(jogoSelecionado.dataLancamento + "T00:00:00");
    document.getElementById("ano").textContent = dataLancamento.toLocaleDateString("pt-BR");
    // Plataformas
    document.getElementById("plataformas").textContent = jogoSelecionado.plataformas.join(", ");
    // Descrição
    document.getElementById("descricao").textContent = jogoSelecionado.descricao;
    // Gêneros
    const divGeneros = document.getElementById("generos");
    // forEach que percorre os gêneros, criando um elemento HTML pra cada gênero cadastrado
    jogoSelecionado.generos.forEach(function(item) {
        const genero = document.createElement("span");
        genero.textContent = item;
        genero.classList.add("genero-destaque");
        divGeneros.appendChild(genero);
    });
    // Galeria de imagens
    const listaImagens = document.getElementById("lista-imagens");
    // forEach que percorre as imagens, criando um elemento 'img' pra cada imagem cadastrada
    jogoSelecionado.imagens.forEach(function(item) {
        const imagem = document.createElement("img");
        imagem.src = item;
        imagem.alt = `Imagem de ${jogoSelecionado.nome}`;
        imagem.classList.add("imagem-galeria");
        listaImagens.appendChild(imagem);
    });
} // caso o jogo não seja encontrado, cria uma tela com uma mensagem de aviso
else {
    document.querySelector(".pagina-detalhes").textContent = "Jogo não encontrado.";
}
