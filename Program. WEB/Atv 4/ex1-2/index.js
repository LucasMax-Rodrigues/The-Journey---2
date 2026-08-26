const aplicativos = [
  { id_aplicativo: 1, nome: "WhatsApp", descricao: "Mensagens instantâneas e chamadas de voz/vídeo." },
  { id_aplicativo: 2, nome: "Spotify", descricao: "Streaming de músicas, playlists e podcasts." },
  { id_aplicativo: 3, nome: "Google Maps", descricao: "Navegação GPS, rotas e mapas em tempo real." },
  { id_aplicativo: 4, nome: "Notion", descricao: "Organização de tarefas, notas e gerenciamento de projetos." }
];

const linhasTabela = aplicativos.map(app => `
  <tr>
    <td>${app.id_aplicativo}</td>
    <td>${app.nome}</td>
    <td>${app.descricao}</td>
  </tr>
`).join("");

document.getElementById("corpo-tabela").innerHTML = linhasTabela;