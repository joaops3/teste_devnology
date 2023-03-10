<div align="center"> 
 
<img align="center" alt="tech" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />         
<img align="center" alt="tech" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                 
</div>

<h3 align="center">Teste Devnology </h3>

## Sumário
- [Regras de Negócio](#backend)
- [Backend](#backend)
	- [Tecnologias](#tecnologias_back)
    - [Diagrama](#diagrama)
	- [Rotas](#rotas)
- [Frontend](#frontend)
	- [Tecnologias](#tecnologias_front)
	- [Funcionamento](#funcionamento_front)
- [Executar Projeto](#executar)

## Regras de Negócio <a name = "regra"></a>
Site de Armazenamento de links pessoais.
- Homepage exibindo os links.
- Usuario pode se cadastrar e efetuar login.
- Usuario pode se salvar, editar e excluir links do seu perfil.
- O perfil possui a pagina favoritos onde um web crawler puxa os links de determinado blog. 



## BackEnd<a name = "backend"></a>
### lib's utilizadas: <a name = "tecnologias_back"></a>

- node 16.17.0
- Nestjs 9.0.0
- passport - jwt 
- jsonWebToken
- Mongoose
- MongoDB
- Cheerio


### Diagrama:

Foi utilizado como bando de dados o MongoDb e o Mongoose como ORM.
O projeto possui 2 models, sendo elas user e link. User podendo ter n link.

<div>
<img align="center" alt="user model" width="300" height="250" src="backend/uploads/model_user.PNG" /> 
<img align="center" alt="link model" width="300" height="250" src="backend/uploads/model_link.PNG" /> 
</div>

### Funcionalidades <a name = "rotas"></a>
<p>O projeto é dividido pelas seguintes rotas:</p>
<p>Para utilizar as rotas de GET PUT, DELETE é necessário fornecer token JWT válido, fornecido pela rota de login. As rotas só podem ser acessadas por usuarios com role de USER.</p>

**api/auth**:

- `api/auth/login` (POST)

<img align="center" alt="login" width="300" height="250" src="backend/uploads/login.PNG" /> 

**/api/user**: 


- `api/user` (POST)

<img align="center" alt="create user" width="300" height="250" src="backend/uploads/user_create.PNG" /> 



- `api/user/:id` (GET, PUT, DELETE)

<img align="center" alt="get user" width="300" height="250" src="backend/uploads/user_getone.PNG" /> 

- `api/user/:id/addlink` (PUT)

<img align="center" alt="put user" width="300" height="250" src="backend/uploads/user_addlink.PNG" /> 

- `api/user/:id/removelink/:idLink` (DELETE)

<img align="center" alt="delete user" width="300" height="250" src="backend/uploads/user_removelink.PNG" /> 

**/link**:

- `api/link/:id` (PUT, GET)

<img align="center" alt="put link" width="300" height="250" src="backend/uploads/link_update.PNG" /> 

- `api/link/devblog` (GET) 
Esta rota usa um webcrawler para puxar automaticamente os links do blog https://devgo.com.br/

<img align="center" alt="get devblog" width="300" height="250" src="backend/uploads/link_craw.PNG" /> 





As rotas podem ser testadas utilizando a interface gráfica do frontend. O projeto tambem acompanha um esquema das rotas que pode ser utilizado no postman.



## FrontEnd <a name = "frontend"></a>

### lib's utilizadas: <a name = "tecnologias_front"></a>

- node 16.17.0
- next 12.3.1
- ChakraUI
- React Hook Forms

### Funcionamento <a name = "funcionamento_front"></a>

**Estrutura do Projeto:**

- `./pages`: são todas as páginas disponíveis para acesso
- `./components`: Todos os componentes e utilizados nas páginas
- `./services`: Possui funções responsaveis por armazenar as rotas e interargir com a API
- `./styles`: Onde fica localizado as variaveis globais de estilo.
- `./utils`: Onde fica todas as funções e arquivos de ajuda.

**Navegação:**

<p>Primeiramente para acessar a conta, o usuario deve se cadastar e Fazer login. Após fazer login, o usuario tera acesso a dashboard onde ele podera cadastrar novos links e visualizar seus links cadastrados. Na aba favoritos, temos a pagina onde o webcrawler pega todos os links automaticamente do blog devgo. </p>

## Como executar Projeto ? <a name = "executar"></a>


#### Rodar Backend
Por padrão o projeto roda em: http://localhost:3333
- Local
	- criar um arquivo .env de acordo com a .env.example, a variavel DB_URL deve ser colocado as credenciais do seu mongodb.
	- Na pasta backend executar `npm i` e após `npm start`
- Docker
	- Na pasta backend executar `docker compose up`

#### Rodar Frontend
Por padrão o projeto roda em: http://localhost:3000
- Local
	- Na pasta frontend executar `yarn` e após `yarn dev`
- Docker
	- Na pasta frontend executar `docker compose up`
