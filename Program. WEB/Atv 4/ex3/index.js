const btnEnviar = document.getElementById("btn");

const aplicativos = [
  { id_aplicativo: 1, nome: "WhatsApp", descricao: "Mensagens instantâneas e chamadas." },
  { id_aplicativo: 2, nome: "Spotify", descricao: "Streaming de músicas e podcasts." },
  { id_aplicativo: 3, nome: "Google Maps", descricao: "Navegação GPS e mapas em tempo real." },
  { id_aplicativo: 4, nome: "Notion", descricao: "Organização de notas, tarefas e estudos." }
];

btnEnviar.addEventListener("click", function() {
  const cardsApp = aplicativos.map(app => `
    <div class="card">
      <span class="card-id">#${app.id_aplicativo}</span>
      <h3>${app.nome}</h3>
      <p>${app.descricao}</p>
    </div>
  `).join("");

  document.body.innerHTML = `
    <h2>Lista de Aplicativos</h2>
    <div class="card-container">
      ${cardsApp}
    </div>
  `;
});
