// const infoC = {
//     (Nome player: "Lucas", Nome conta: "Morant12", Elo: "Ouro", Idade: "18"),
//     (Nome player: "Lucas", Nome conta: "Morant12", Elo: "Ouro", Idade: "18"),
//     (Nome player: "Lucas", Nome conta: "Morant12", Elo: "Ouro", Idade: "18"),
//     (Nome player: "Lucas", Nome conta: "Morant12", Elo: "Ouro", Idade: "18")
// }

const infoC = [
    { nome: "Lucas", conta: "Morant12", elo: "Ouro", idade: 18 },
    { nome: "Daniel", conta: "DaniPro", elo: "Diamante", idade: 19 },
    { nome: "Mateus", conta: "MatSniper", elo: "Ascendente", idade: 18 },
    { nome: "João", conta: "JoaoVava", elo: "Platina", idade: 20 }
];

const tbody = document.getElementById("info")

tbody.innerHTML = `
    <tr>
        <td>${infoC[0].nome}</td>
        <td>${infoC[0].conta}</td>
        <td>${infoC[0].elo}</td>
        <td>${infoC[0].idade}</td>
    </tr>
    <tr>
        <td>${infoC[1].nome}</td>
        <td>${infoC[1].conta}</td>
        <td>${infoC[1].elo}</td>
        <td>${infoC[1].idade}</td>
    </tr>
    <tr>
        <td>${infoC[2].nome}</td>
        <td>${infoC[2].conta}</td>
        <td>${infoC[2].elo}</td>
        <td>${infoC[2].idade}</td>
    </tr>
    <tr>
        <td>${infoC[3].nome}</td>
        <td>${infoC[3].conta}</td>
        <td>${infoC[3].elo}</td>
        <td>${infoC[3].idade}</td>
    </tr>
`;

//Alternativa mais limpa:
// const tbody = document.getElementById("info");

// // 3. Monta as linhas dentro da tabela
// for (let i = 0; i < infoC.length; i++) {
//     const player = infoC[i];

//     tbody.innerHTML += `
//         <tr>
//             <td>${player.nome}</td>
//             <td>${player.conta}</td>
//             <td>${player.elo}</td>
//             <td>${player.idade}</td>
//         </tr>
//     `;
// }