
# Project Micro-Twitter

- The project's main idea is to provide an end-to-end application, from database, api and front and. 🚀🔥



## Deploy

Para fazer o deploy desse projeto rode

```bash
   yarn dev
```


## Documentação da API

#### return all  tweets

```http
  GET /api/tweets
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. Necessário Auth_Token |


#### Created tweet

```http
  POST /api/tweets
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `message` | `string` | **Obrigatório**. Necessário Auth_Token|




#### Created Account

```http
  POST /api/signup
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name, username, email, password,` | `string` | `Null`


#### SingIn Account

```http
  POST /api/signup
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email, password` | `string` |  `Null`|





## Funcionalidades

- Created Account User
- Get Tweets
- Post new Tweets



## Stack utilizada

**Front-end:** ReactJS, TailwindCSS

**Back-end:** Node, Prisma, KOA, Vercel, PlanetScale, 


## Autores

- [@Gabriel-Jesusvix](https://github.com/Gabriel-Jesusvix)
- [@brunobertolini](https://github.com/brunobertolini)


## Screenshots

![App Screenshot](https://via.p![Captura de Tela 2022-06-06 às 21 38 14](https://user-images.githubusercontent.com/62946928/172271716-8571c4f4-d5cb-4edf-8edc-13efa67758a7.png)

![Captura de Tela 2022-06-06 às 21 38 44](https://user-images.githubusercontent.com/62946928/172271764-c7e3faa4-d751-4174-b64f-f464458b3612.png)

![Captura de Tela 2022-06-06 às 21 39 19](https://user-images.githubusercontent.com/62946928/172271802-4d468c84-07e3-4dd9-883d-edec29f16393.png)

