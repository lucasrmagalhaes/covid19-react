export const formatNumber = (number, locale = 'pt-BR') => {
    if (typeof number !== 'number' || isNaN(number)) return '0'

    return new Intl.NumberFormat(locale).format(number)
}

export const formatPercent = (value, locale = 'pt-BR') => {
    if (typeof value !== 'number' || isNaN(value)) return '0%'

    return new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 2 }).format(value)
}
