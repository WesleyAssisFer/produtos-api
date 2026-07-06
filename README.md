# Sistema Web para Gerenciamento de Produtos

Sistema desenvolvido para realizar o gerenciamento de produtos por meio de operações de cadastro, listagem, busca por ID, atualização e exclusão.

## Como utilizar

### 1. Configurar o banco de dados

Acesse o arquivo:

```text
src/database/connection.js
```

e informe as credenciais do seu banco de dados.

### 2. Executar a aplicação

No terminal, execute o comando:

```bash
node src/app.js
```

### 3. Acessar a aplicação

Abra o navegador e acesse:

```text
http://localhost:3000
```

Quando a tela de login for exibida, utilize as seguintes credenciais:

- **Nome:** pedro
- **Senha:** 123

Caso deseje alterar as credenciais de acesso, edite o arquivo:

```text
public/login.js
```

Após o login, o sistema de gerenciamento de produtos estará disponível para uso.
