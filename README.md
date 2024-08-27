
# CrudAngularApp

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.1.

## Descrição do Projeto

O **CrudAngularApp** é uma aplicação Angular que serve como interface para um CRUD (Create, Read, Update, Delete) de produtos. Este projeto consome uma API Node.js que gerencia os dados dos produtos e usuários.

## Configuração do Ambiente

### 1. Clone o repositório da API

Antes de executar a aplicação Angular, é necessário clonar e configurar a API que será consumida pela aplicação.

Clone o repositório da API:

```bash
git clone https://github.com/gucelestinodev/CRUD-Lojas.git
```

### 2. Configure a API

Acesse o diretório da API clonado e instale as dependências:

```bash
cd CRUD-Lojas
npm install
```

Após a instalação, configure o arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias. Aqui está um exemplo:

```bash
API_URL=/api/v1
SECRET_KEY=123456
CONNECTION_STRING=mongodb+srv://<usuário>:<senha>@cluster0.mongodb.net/eshop-database?retryWrites=true&w=majority
```

### 3. Execute a API

Com as dependências instaladas e o `.env` configurado, execute a API:

```bash
npm start
```

A API estará rodando em `http://localhost:3000/`.

### 4. Execute a Aplicação Angular

Agora, para rodar a aplicação Angular, siga os passos abaixo:

1. Instale as dependências do projeto Angular:

    ```bash
    npm install
    ```

2. Execute o servidor de desenvolvimento:

    ```bash
    ng serve
    ```

    Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Estrutura do Projeto

Este projeto possui uma estrutura básica com componentes como login, cadastro, listagem de produtos, e criação de produtos. O fluxo principal envolve o login do usuário, que, ao ser autenticado, pode visualizar uma lista de produtos cadastrados e criar novos produtos.

## Comandos Disponíveis

- **Gerar Componente**: Execute `ng generate component nome-componente` para gerar um novo componente.
- **Build**: Execute `ng build` para compilar o projeto. Os artefatos de build serão armazenados no diretório `dist/`.
- **Testes Unitários**: Execute `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).
- **Testes End-to-End**: Execute `ng e2e` para rodar os testes end-to-end.

## Mais Informações

Para mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [documentação oficial](https://angular.dev/tools/cli).
