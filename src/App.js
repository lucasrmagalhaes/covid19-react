import React from 'react'; 
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        Teste
      </div>
    </StylesProvider>
  );
}

export default App;
