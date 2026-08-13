import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Board from './Board'
import { I18nProvider } from '../../../commons/i18n'

const renderBoard = (data) =>
    render(
        <I18nProvider>
            <Board data={data} />
        </I18nProvider>
    )

describe('Board', () => {
    it('mostra 7 skeletons enquanto os dados carregam', () => {
        const { container } = renderBoard({})
        expect(container.querySelectorAll('.MuiSkeleton-root')).toHaveLength(7)
    })

    it('mostra os valores formatados quando os dados chegam', () => {
        renderBoard({
            cases: 1000,
            casesPerOneMillion: 250,
            active: 5,
            deaths: 100,
            recovered: 800,
            critical: 0,
        })
        expect(screen.getByText('1.000')).toBeInTheDocument()
        expect(screen.getByText('10%')).toBeInTheDocument() // letalidade = 100/1000
        expect(screen.getByText('CASOS')).toBeInTheDocument()
        expect(screen.getByText('LETALIDADE')).toBeInTheDocument()
    })
})
