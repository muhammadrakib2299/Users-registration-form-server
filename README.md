# Users Registration Form — Server

Express + MongoDB API behind [Users-registration-form-Client](https://github.com/muhammadrakib2299/Users-registration-form-Client). It stores each submitted registration in a MongoDB `users` collection.

## Endpoints

| Method | Path | What it does |
|---|---|---|
| `POST` | `/users` | Inserts the JSON body into `usersdb.users`; returns `201` with the new id |

## Built with

Node.js · Express 5 · MongoDB Node driver · CORS · dotenv

## Run locally

```bash
npm install
cp .env.example .env     # set MONGODB_URI
npm run dev              # nodemon, http://localhost:3000
```

Then start the client — it posts to `http://localhost:3000/users`.

## License

[MIT](LICENSE) © Md. Rakib
