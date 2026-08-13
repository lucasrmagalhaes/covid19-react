import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyle from './commons/styles/global-style'
import { I18nProvider } from './commons/i18n'
import Main from './containers/Main'

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  // seletor por atributo (data-mui-color-scheme) para o CSS global reagir ao tema
  cssVariables: { colorSchemeSelector: 'data' },
})

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        <GlobalStyle />
        <I18nProvider>
          <Main />
        </I18nProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
