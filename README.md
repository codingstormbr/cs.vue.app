# CS VUE - Vue 3.x #

## Sobre CS VUE

Este projeto é desenvolvido e mantido por Coding Storm. Ele é uma copia da estrutura web do site para fins de estudos, reuso, entre outros objetivos.

### Stack utilizada

- Javascript
- Vue3
- Nginx
- Docker

### Ambiente de desenvolvimento

- Instale o Docker no Ubuntu LTS, podendo utilizá-lo no WSL (Windows Subsystem for Linux) com Ubuntu LTS, em uma máquina virtual com Ubuntu ou diretamente em um servidor Ubuntu.

### Construindo container

Criar rede padrao no docker.

```bash
sudo docker network create --subnet=192.168.10.0/24 enetwork
```

Criando containers

```bash
sudo docker compose up -d
```

Concedendo permissão localmente

```bash
sudo chmod -R 777 .
```

### Configurando aplicação

Copie o arquivo .env para o ambiente que está implantando (Desenvolvimento, Homologação ou Produção).

DEV

```bash
cp src/.env.dev src/.env
```

HML

```bash
cp src/.env.hml src/.env
```

PRD

```bash
cp src/.env.prd src/.env
```

#### Instalando NodeJS (Desenvolvimento)

Segue instalação do NodeJS se estiver usando Ubuntu LTS.

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

```bash
sudo apt-get install -y nodejs

```

Acessar o diretorio `src` e execultar o comando abaixo.

```bash
npm run dev -- --host
```

Isto fará que ele crie um serviço web na porta 8081 (ver arquivo de configuração do Vite).

#### Serviço em produção (Build)

Para colocar a aplicação em produção é necessário copiar as corretas variveis de ambiente de produção de ".env.prd" para ".env" e fazer a build conforme comando a seguir.

```bash
npm run build
```

## Autores

- [Paulo Teixeira](https://codingstorm.com.br/biografia)
