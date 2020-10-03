# covid19-js

npx - Gerenciador de pacotes.
create-react-app - Cria uma aplicação inicial que facilita o desenvolvimento.

npx create-react-app covid19-js

cd covid19-js

Subindo o projeto:
npm run start

Deixando o projeto em branco - deletar dentro do diretório src:

App.test.js;
index.css;
app.css;
logo.svg;

index.js -> 
3 import './index.css';

App.js -> 
2 import logo from './logo.svg';  
3 import './App.css'; e
6-19 Remover o header.

Montando uma estrutura - criar as seguintes pastas em src:
containers -> pages e views. 
components -> componentes.
assets -> imagens e fontes.
commons -> constantes e estilos.
    commons -> constants
    commons -> utils -> exemplo: validação de cpf.
    commons -> styles

Instalando dependência:
npm i styled-components

Criar um arquivo na raiz:
jsconfig.json -> caminho relativo - passar alias nesse arquivo.

Instalando dependência:
npm i @material-ui/core

Criando um arquivo em src:
config-overrides.js -> Arquivo para sobrescrever a configuração do React.

código - config-overrides.js:
const { useBabelRc, override } = required('customize-cra')
module.exports = overrider(useBabelRc()) // Pegar as configurações e utilizar o Babel.

Instalando dependências:
npm i @material-ui/lab -> Ficar mais bonito o carregamento da página.
npm i --save-dev customize-cra
npm i --save-dev react-app-rewired
npm i styled-components -> Estilização do projeto.

Alterar no package.json:
17 "start": "react-app-rewired start",
18 "build": "react-app-rewired build",

npm run start

New folder dentro de assets:
images

New file dentro de commons - style:
global-style.js -> possível sobrescrever qualquer css da aplicação.

Código - global-style.js:

import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpeg'

const globalStyle = createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
    }

    body {
        line-height: normal;
    }

    html, body {
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root {
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }
    `

    export default globalStyle

Alterar o App.js - Código:

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
        Exemplo
      </div>
    </StylesProvider>
  );
}

export default App;

Possível utilizar JS no CSS
global-style.js - adicionando algumas classes:

    .mb-2 {
        margin-bottom: 16px;
    }

    .pt-2 {
        padding-top: 16px;
    }

    .cursor {
        cursor: pointer;
    }

App.js - Adicionar o Main - Página principal:
5 import Main from './containers/Main'
12 <Main />

Dentro de containers criar a pasta: Main
Dentro de Main criar o arquivo index.jsx -> jsx para facilitar porque o arquivo é React.
memo evita criar renderização desnecessária na página.

index.jsx - código:

import React, { memo } from 'react'

function Main() {

    return (
        <div>
            Teste
        </div>
    )
}

export default memo(Main)

Criar o arquivo: api.js em src:

const path = 'https://coronavirus-19-api.herokuapp.com/countries' // api

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}}`, headers) // fetch é mais simples mas não é recomendado por questão de segurança
        .then((response) => response.json()) // retorna o dado/país
}

export default {
    getCountry
}