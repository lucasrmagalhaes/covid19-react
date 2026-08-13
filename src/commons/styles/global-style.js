import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid19.webp'

const globalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    /* indicador de foco visível para navegação por teclado (WCAG 2.4.7) */
    :focus-visible {
        outline: 2px solid #5d78ff;
        outline-offset: 2px;
    }

    body {
        line-height: 1.6;
    }

    html, body {
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root {
        background-color: #10151c; /* fallback enquanto a imagem carrega */
        background-image: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }

    /* colorSchemeSelector 'data' do MUI estampa data-dark/data-light no <html> */
    [data-dark] #root {
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${CovidImg});
    }

    .mb-2 {
        margin-bottom: 16px;
    }

    .pt-2 {
        padding-top: 16px;
    }

    .cursor {
        cursor: pointer;
    }
    `

    export default globalStyle
