import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Panel from './Panel'
import { I18nProvider } from '../../../commons/i18n'

const theme = createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: { colorSchemeSelector: 'data' },
})

const baseProps = { data: {}, onChange: () => {}, country: 'World', countries: [] }

const renderPanel = () =>
    render(
        <ThemeProvider theme={theme}>
            <I18nProvider>
                <Panel {...baseProps} />
            </I18nProvider>
        </ThemeProvider>
    )

describe('Panel', () => {
    afterEach(() => {
        delete navigator.share
    })

    it('mostra Copiar quando o navegador não tem a Web Share API', () => {
        renderPanel()
        expect(screen.getByText('Copiar')).toBeInTheDocument()
    })

    it('mostra Compartilhar quando o navegador tem a Web Share API', () => {
        navigator.share = vi.fn()
        renderPanel()
        expect(screen.getByText('Compartilhar')).toBeInTheDocument()
    })
})
