let dados= [
    {
        nome:"Australia",
        capital:"Camberra",
        continente:"Oceania",
        idioma:"Ingles",
        moeda:"Dolar"
    },
    {
        nome:"Austria",
        capital:"Viena",
        continente:"Europa",
        idioma:"Alemao",
        moeda:"Euro"
    },
    {
        nome:"Portugal",
        capital:"Lisboa",
        continente:"Europa",
        idioma:"Portugues",
        moeda:"Euro"

    },
    {
        nome:"Islandia",
        capital:"Reiquiavique",
        continente:"Europa",
        idioma:"Islandes",
        moeda:"Coroa Islandesa"
    }

]

const tabela = document.getElementById("tabela")

dados = dados.map(item => `
    <tr>
        <td>${item.nome}</td>
        <td>${item.capital}</td>
        <td>${item.continente}</td>
        <td>${item.idioma}</td>
        <td>${item.moeda}</td>
    </tr>
    `).join("")

    tabela.innerHTML = dados