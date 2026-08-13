const path = 'https://disease.sh/v3/covid-19' // API

async function request(url, signal) {
    const response = await fetch(url, { mode: 'cors', cache: 'default', signal })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return response.json()
}

function getCountry(country, signal) {
    // 'World' não existe no endpoint de países; o total global fica em /all (mesmo formato)
    const url = country === 'World' ? `${path}/all` : `${path}/countries/${country}`
    return request(url, signal)
}

function getHistorical(country, signal) {
    // /historical/all traz a timeline na raiz; /historical/{país} traz em .timeline
    const url = country === 'World'
        ? `${path}/historical/all?lastdays=all`
        : `${path}/historical/${country}?lastdays=all`
    return request(url, signal)
}

function getCountries(signal) {
    return request(`${path}/countries?sort=cases`, signal)
}

export default {
    getCountry,
    getHistorical,
    getCountries
}
