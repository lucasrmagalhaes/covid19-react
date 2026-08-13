import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

const messages = {
    pt: {
        title: 'Coronavírus (COVID-19)',
        overview: 'Visão Geral',
        dataUpTo: 'Dados até',
        historicalNote: 'Dados históricos — série global encerrada em 2023',
        selectCountry: 'País',
        world: 'Mundo',
        cases: 'CASOS',
        casesPerMillion: 'CASOS/MILHÃO',
        active: 'ATIVO',
        deaths: 'ÓBITOS',
        fatality: 'LETALIDADE',
        recovered: 'RECUPERADOS',
        critical: 'CRÍTICO',
        share: 'Compartilhar',
        copy: 'Copiar',
        retry: 'Tentar novamente',
        errorMsg: 'Não foi possível carregar os dados.',
        historyTitle: 'Evolução da pandemia',
        historyUnavailable: 'Histórico indisponível para este país.',
        rankingTitle: 'Top 10 — casos por milhão de habitantes',
        darkMode: 'Alternar tema claro/escuro',
        language: 'Mudar idioma para inglês',
    },
    en: {
        title: 'Coronavirus (COVID-19)',
        overview: 'Overview',
        dataUpTo: 'Data up to',
        historicalNote: 'Historical data — global series ended in 2023',
        selectCountry: 'Country',
        world: 'World',
        cases: 'CASES',
        casesPerMillion: 'CASES/MILLION',
        active: 'ACTIVE',
        deaths: 'DEATHS',
        fatality: 'FATALITY',
        recovered: 'RECOVERED',
        critical: 'CRITICAL',
        share: 'Share',
        copy: 'Copy',
        retry: 'Try again',
        errorMsg: 'Could not load the data.',
        historyTitle: 'Pandemic timeline',
        historyUnavailable: 'History unavailable for this country.',
        rankingTitle: 'Top 10 — cases per million people',
        darkMode: 'Toggle light/dark theme',
        language: 'Switch language to Portuguese',
    },
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
    const [locale, setLocale] = useState(() => {
        const saved = typeof localStorage !== 'undefined' && localStorage.getItem('locale')
        return saved === 'en' || saved === 'pt' ? saved : 'pt'
    })

    useEffect(() => {
        document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
    }, [locale])

    const value = useMemo(() => ({
        locale,
        intlLocale: locale === 'pt' ? 'pt-BR' : 'en-US',
        t: (key) => messages[locale][key] ?? key,
        toggleLocale: () => setLocale((prev) => {
            const next = prev === 'pt' ? 'en' : 'pt'
            try { localStorage.setItem('locale', next) } catch { /* modo privado */ }
            return next
        }),
    }), [locale])

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useI18n() {
    const context = useContext(I18nContext)
    if (!context) throw new Error('useI18n deve ser usado dentro de <I18nProvider>')
    return context
}

// Nome do país no idioma atual, direto do browser (sem lib de i18n)
export function regionName(iso2, locale) {
    if (!iso2) return null
    try {
        return new Intl.DisplayNames([locale], { type: 'region' }).of(iso2)
    } catch {
        return null
    }
}
