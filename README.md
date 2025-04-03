<h1 align="center">Sistema Integrado de Distribuição de Alimentos - API Rest (Backend)</h1> 

Trabalho de Conclusão de Curso apresentado como requisito parcial para obtenção de Bacharel em Ciência da Computação pelo Centro Universitário Carioca - UNICARIOCA

## Requisitos
### Node
Faça o download e instalação do Node LTS, disponivel em:
<br>https://nodejs.org/pt-br/

### Docker
Faça o download e instalação do Docker, disponivel em:
<br>https://docs.docker.com/desktop/windows/install/

### Git (Opcional)
Faça o download e instalação do Git , disponivel em:
<br>https://gitforwindows.org/

## Preparação do ambiente
### Download do Projeto
#### Com Git:
Faça o clone do repositório em uma pasta de sua preferência abrindo um terminal e executando o  comando:

`git clone https://github.com/RickAlves07/tcc_sem_fome_node.git`

#### Sem Git:
Ou faça o Download dos arquivos clicando no botão `Code` e em `Download ZIP`, extraia os arquivos em uma pasta de sua preferência.


### Instalação das dependências do projeto
Abra um terminal na pasta onde se encontra o projeto, e execute o comando:

`npm install`

### Variaveis de ambiente
Crie um arquivo com o nome `.env` e adicione o conteúdo abaixo:
```
SERVER_PORT=16671
SERVER_HOST=localhost
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=semfome/database
MYSQL_USER=node@api
MYSQL_PASSWORD=node@semfome
APP_TIMEZONE='-03:00'
```

### Banco de dados
Para criar o container do banco de dados da aplicação, abra um terminão e execute os comandos:

`docker image pull myslq`

Em seguida, execute o comando utilizando os valores das variaveis inseridos no arquivo .env:

`docker run -e MYSQL_ROOT_PASSWORD=node@semfome -e MYSQL_DATABASE=semfome/database -e MYSQL_USER=node@api -e MYSQL_PASSWORD=node@semfome -d --name container-name -p 3306:3306 mysql`

## Executando o projeto
Abra um terminal na pasta onde se encontra o projeto, e execute o comando:`

`npm run dev`

## Interface de Usuario
Para o uso da API, realize o passo a passo para uso da Interface disponivel em:
<br>https://github.com/RickAlves07/tcc_sem_fome_angular

## Desenvolvido por:
*Rick Alves*
- LinkedIn: [@rickalves07](https://linkedin.com/in/rickalves07)

*Johann Palheiros*
- LinkedIn: [@johannpalheiros](https://linkedin.com/in/johannpalheiros)
