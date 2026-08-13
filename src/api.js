const path = 'https://disease.sh/v3/covid-19' // API

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    // 'World' não existe no endpoint de países; o total global fica em /all (mesmo formato)
    const url = country === 'World' ? `${path}/all` : `${path}/countries/${country}`
    return fetch(url, headers) // fetch é mais simples mas não é recomendado por questão de segurança
        .then((response) => response.json()) // retorna o dado/país
}

export default {
    getCountry
}