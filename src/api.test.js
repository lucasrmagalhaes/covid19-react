import { describe, it, expect, vi, beforeEach } from 'vitest'
import Api from './api'

const okResponse = (body = {}) => Promise.resolve({ ok: true, json: () => Promise.resolve(body) })

describe('Api', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn(() => okResponse()))
    })

    it('busca um país pelo endpoint /countries', async () => {
        await Api.getCountry('Brazil')
        expect(fetch).toHaveBeenCalledWith('https://disease.sh/v3/covid-19/countries/Brazil', expect.any(Object))
    })

    it('mapeia World para o endpoint global /all', async () => {
        await Api.getCountry('World')
        expect(fetch).toHaveBeenCalledWith('https://disease.sh/v3/covid-19/all', expect.any(Object))
    })

    it('mapeia World para /historical/all no histórico', async () => {
        await Api.getHistorical('World')
        expect(fetch).toHaveBeenCalledWith(
            'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
            expect.any(Object)
        )
    })

    it('rejeita quando a resposta não é ok', async () => {
        vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ ok: false, status: 404 })))
        await expect(Api.getCountry('Atlantis')).rejects.toThrow('HTTP 404')
    })
})
