const app = require('express')();
const PORT = process.env.PORT || 3000;
const http = require('http');


app.get('/', (req, res) => {
  res.send('Hello World and a new world!');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;