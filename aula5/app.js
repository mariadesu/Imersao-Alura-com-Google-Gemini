//faz aparecer os dados ao clicar em pesquisar
function search() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //Pega o valor da tag
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    //Se a pesquisa for vazia, não mostrar nada
    if (campoPesquisa == ""){
      section.innerHTML = "ERRO: busca inválida.";
      return
    }

    //Deixar a pesquisa e os dados em letras minusculas para melhorar a busca
    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = "";
    let avaliacao = "";
    let tags = "";

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
      // Coloca os dados em lowercase para melhorar a busca
      titulo = dado.titulo.toLowerCase();
      avaliacao = dado.avaliacao.toLowerCase();
      tags = dado.tags.toLowerCase();

      //Verifica se o texto digitado aparece no titulo OU na descricao
      if (titulo.includes(campoPesquisa) || avaliacao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada resultado, incluindo título, avaliação e link
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"> ${dado.avaliacao}</p>
          <a href=${dado.link}>Assistir agora</a>
        </div>
        `;
      }

      // Se a busca não está no banco de dados
      if (!resultados) {
        resultados = "Busca não encontrada.";
      }

    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados; // Boas práticas: acessar section o mínimo possível
  }