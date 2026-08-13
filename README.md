<h1 align="center">COVID-19 📊</h1>

<p align="center">
  <i>Progressive Web App em React com o panorama histórico da COVID-19 por país.</i>
</p>

<p align="center">
  <a href="https://covid19-pwa.netlify.app/"><img src="https://img.shields.io/badge/demo-online-2ea44f?style=flat-square&logo=netlify&logoColor=white" alt="Demo online" /></a>
  <a href="https://github.com/lucasrmagalhaes/covid19-react/blob/main/LICENSE"><img src="https://img.shields.io/github/license/lucasrmagalhaes/covid19-react?style=flat-square" alt="Licença" /></a>
  <a href="https://github.com/lucasrmagalhaes/covid19-react/commits/main"><img src="https://img.shields.io/github/last-commit/lucasrmagalhaes/covid19-react?style=flat-square" alt="Último commit" /></a>
</p>

<p align="center">
  <a href="https://covid19-pwa.netlify.app/">
    <img src="public/dio.gif" alt="Demonstração do aplicativo" />
  </a>
</p>

<p align="center">
  <strong>🔗 <a href="https://covid19-pwa.netlify.app/">covid19-pwa.netlify.app</a></strong>
</p>

## Sobre

Dashboard que mostra casos, óbitos, recuperados, ativos e críticos da COVID-19 para 14 países e o total mundial, consumindo a API pública [disease.sh](https://disease.sh/). Como a coleta global de dados foi encerrada em 2023, os números representam o retrato histórico consolidado da pandemia.

- 📱 **PWA**: instalável e funciona offline
- 🌎 **14 países + mundo**, com seletor de bandeiras
- 📤 **Compartilhamento nativo** (Web Share API) no celular, cópia para a área de transferência no desktop
- 🌙 Interface em português, responsiva de mobile a desktop

## Stack

React 19 · Vite · Material UI (@mui/material) · styled-components · vite-plugin-pwa

> Migrado em 2026 do create-react-app / React 16 / Material-UI v4 para a stack atual — detalhes no histórico de commits.

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (dist/)
npm run preview  # serve o build localmente
```

## Créditos

- [Projeto original](https://github.com/Tautorn/covid19-pwa) de Tautorn
- [disease.sh](https://disease.sh/) — Open Disease Data API
- [Flag Icons](https://www.softicons.com/web-icons/flag-icons-by-custom-icon-design) por Custom Icon Design

## Licença

Distribuído sob a licença MIT — veja [LICENSE](LICENSE).
