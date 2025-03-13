const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'seminars.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
   await new Promise((res) => {
      setTimeout(res, 800);
   });
   next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
   console.log('server is running on 8000 port');
});

// // запуск сервера
// const PORT = 8443;
// const HTTP_PORT = 8000;

// const httpsServer = https.createServer(options, server);
// const httpServer = http.createServer(server);

// httpsServer.listen(PORT, () => {
//     console.log(`server is running on ${PORT} port`);
// });

// httpServer.listen(HTTP_PORT, () => {
//     console.log(`server is running on ${HTTP_PORT} port`);
// });
