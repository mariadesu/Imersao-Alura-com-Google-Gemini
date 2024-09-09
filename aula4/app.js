//faz aparecer os dados ao clicar em pesquisar
function search() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada elemento do array 'dados'
    for (let dado of dados) {
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
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados; // Boas práticas: acessar section o mínimo possível
  }