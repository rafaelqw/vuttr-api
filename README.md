# Introdução

A API é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Requisitos
- NodeJS
- PostgreSQL

# Instalação

### 1 - NodeJS
- Faça download da versão LTS do [NodeJS](https://nodejs.org/en/) e instale-o.

### 2 - PostgreSQL
- Faça download do [PostgreSQL](https://www.postgresql.org/download/) e instale-o. Crie um banco de dados com o nome que desejar e um usuário para a aplicação.

### 3 - Projeto
- Dê um GIT CLONE nesse projeto.
- Abra seu terminal na pasta do projeto e instale as dependências necessárias com o comando abaixo:

```javascript
yarn
// ou
npm install
```

### 4 - Configuração do Banco de Dados
Antes de iniciarmos o projeto precisamos fazer a configuração da conexão do banco de dados. Para isso precisaremos configurar o arquivo `ormconfig.json`, encotrado na raiz do projeto.

No arquivo, você encontrará o sequinte conteúdo:

```json
{
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": "example",
  "password": "example",
  "database": "example",
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  },
}
```

Troque os valores das propriedades abaixo para os valores que correspondem a conexão do banco de dados criado no passo 2.

```json
{
  ...
  "port": 5432,
  "host": "localhost",
  "username": "example",
  "password": "example",
  "database": "example",
  ...
}
```

### 4 - Executando as migrations
Após realizar a instalação das dependências do projeto e configuração do banco de dados, iremos executar o comando para rodar as migrations no banco de dados. Execute o comando abaixo:

```javascript
yarn typeorm migration:run
// ou
npm run typeorm migration:run
```

# Uso

### 1 - API
- Inicie a API com o comando abaixo:

```javascript
yarn dev
// ou
npm dev
```

Após rodar o comando acima, sua API estará disponível na porta 3000

### 2 - Documentação
Para visualizar os endpoints disponíveis consulte a documentação da api em: http://localhost:3000/api-docs
