<br />
<p align="center">
  <a href="#">
    <img src="./src/assets/images/ReactBank.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Gama Bank - ReacctBank</h3>

  <p align="center">
    Projeto de React Native feito durante o bootcamp da Accenture Academy
    <br />
    <br />
  </p>
</p>

<details open="open">
  <summary>Tabela de conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project"> o o Projeto</a>
      <ul>
        <li><a href="#built-with">Feito com..</a></li>
          <li><a href="#mindmap">MindMap</a></li>
          <li><a href='#projectstructure'>Estrutura de Pastas</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contato</a></li>
    <li><a href="#acknowledgements">Agradecimentos</a></li>
  </ol>
</details>
<div id='about-the-project'></div>

## Sobre o Projeto

![Product Name Screen Shot](src/assets/images/ProjectPicture.png)

Gama Bank foi realizado durante a Accademia Accenture, programa de capacitação voltado para programadores das áreas de Front End (Angular, React), Mobile (React Native), Back End (Java e Node.js) e Dados (Data Engineer). Ao todo, 220 pessoas foram treinadas pela Gama Academy, uma das principais escolas de capacitação no mercado digital do País.

Este projeto foi realizado por João Pedro, Bruno, Christian e Gustavo, estduantes da turma de React Native, que juntos formam o grupo Reacct Bank

A aplicação mobile multiplataforma consiste em um serviço de banco digital fícticio, que possibilita o usuário a criar conta, fazer lançamentos, transações, transfêrencias e mudar planos através da [Gama Educação - API](https://accenture-java-desafio.herokuapp.com/).

<div id='built-with'></div>

### Feito com:

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Axios](https://github.com/axios/axios)
- [Typescript](https://www.typescriptlang.org/)
- [Yup](https://github.com/jquense/yup)
- [Expo](https://expo.io/)
- [Styled Components](https://styled-components.com/)

<div id='mindmap'></div>

### MindMap

[Acesse aqui!](https://miro.com/app/board/o9J_lS43pUM=/)

<div id='projectstructure'></div>

### Estrutura do projeto

```
React Bank Native
│   README.md
│   .expo
│   .expo-shared
│
└───src
│   └───assets
│   │       fonts
│   │       images
│   │       adaptive-icon.png
│   │       favicon.png
│   │       icon.png
│   │       splash.png
│   └───components
│   └───navigation
│   └───screens
│   └───service
│   └───store
│   │    │ index.tsx
│   │    │ modules
│   └───types
│   └───utils
│       │ auth
│       │ validations
│   app.json
│   App.tsx
│   babel.config.js
│   README.md
│   tsconfig.json
```

<!-- GETTING STARTED -->

## Como Começar

### Pré requisitos

- npm
  ```sh
  npm install npm@latest -g
  ```
- expo
  ```sh
  npm install --global expo-cli
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/jpmmatias/ReacctBankNative.git
   ```
2. Instale os NPM packages
   ```sh
   npm install ou yarn install
   ```
3. Abra o projeto
   ```sh
   npm run start ou yarn start
   ```

<!-- CONTACT -->

## Grupo

- [Bruno Lourenço](https://github.com/bruunos) - Responsável pela interação com API na dashobard do projeto 
- [Christian Spinelli](https://github.com/ChristianSpinelli) - Responsável pela interação com API na dashobard do projeto
- [Gustavo "Piá" de Moraes Xavier](https://github.com/piagja) - Responsável pela interface
- [João Pedro Matias](https://github.com/jpmmatias) - Responsável pela interação com API nas páginas de login, troca de senha e criação de conta, e interface do projeto

<!-- ACKNOWLEDGEMENTS -->

## Agradecimentos

Muito obrigado a todos que nos ajudaram durante o curso

- Professor Douglas Morais, nosso mestre
- Camila, nossa yellow belt
- Accenture
- Gama Academy

