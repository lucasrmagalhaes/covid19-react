export const formatNumber = (number, country = 'pt-BR') => {
    if (isNaN(number)) return '0'
    
    return new Intl.NumberFormat(country).format(number)
}