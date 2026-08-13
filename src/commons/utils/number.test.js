import { describe, it, expect } from 'vitest'
import { formatNumber, formatPercent } from './number'

describe('formatNumber', () => {
    it('formata inteiros no locale pt-BR por padrão', () => {
        expect(formatNumber(1234567)).toBe('1.234.567')
    })

    it('formata no locale en-US quando pedido', () => {
        expect(formatNumber(1234567, 'en-US')).toBe('1,234,567')
    })

    it('retorna "0" para undefined', () => {
        expect(formatNumber(undefined)).toBe('0')
    })

    it('formata 0 como número, não como ausência de valor', () => {
        expect(formatNumber(0)).toBe('0')
    })
})

describe('formatPercent', () => {
    it('formata razões como percentual', () => {
        expect(formatPercent(0.0295, 'en-US')).toBe('2.95%')
    })

    it('retorna "0%" para undefined', () => {
        expect(formatPercent(undefined)).toBe('0%')
    })
})
