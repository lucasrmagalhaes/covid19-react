export const formatNumber = (number, country = 'pt-BR') => {
    if (isNaN(number)) return ''
    
    return new Intl.NumberFormat(country).format(number)
}