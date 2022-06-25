# Boilerplate for backend Node APIS

This boilerplate was created to streamline the construction of APIs in Node with typescript and express.
Configured Prettier, ESLINT and dotenv.

## Project structure 🔧

Folder structure:

`config` - external library settings such as authentication, upload, email, etc.

`modules` - they cover application knowledge areas directly related to business rules. At first we will create the following modules in the application: customers, products, orders and users.

`shared` - general purpose modules shared with more than one application module, such as server.ts file, main route file, database connection, etc.

`services` - will be within each application module and will be responsible for all the rules that the application needs to meet.

## Tools

- [Node.js](https://nodejs.org/en/);
- [ESLINT](https://eslint.org/docs/user-guide/getting-started);
- [Prettier](https://prettier.io/docs/en/install.html);
- [Typescript](https://www.typescriptlang.org/docs/);

Made with 💜 by **Christofer Assis**
