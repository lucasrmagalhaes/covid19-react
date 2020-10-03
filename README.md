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

Instalando dependências:
npm i @material-ui/lab -> Ficar mais bonito o carregamento da página.
npm i --save-dev customize-cra
npm i --save-dev react-app-rewired
npm i styled-components -> Estilização do projeto.

Alterar no package.json:
17 "start": "react-app-rewired start",
18 "build": "react-app-rewired build",