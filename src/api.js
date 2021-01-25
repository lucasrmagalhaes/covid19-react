const path = 'https://coronavirus-19-api.herokuapp.com/countries' // API

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers) // fetch é mais simples mas não é recomendado por questão de segurança
        .then((response) => response.json()) // retorna o dado/país
}

export default {
    getCountry
}