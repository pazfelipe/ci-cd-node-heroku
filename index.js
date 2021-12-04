const app = require('express')();
const PORT = process.env.PORT || 3000;
const http = require('http');


app.get('/', (req, res) => {
  res.send('Mudou tudo ...!');
});

app.get('/coverage', (req, res) => {
  res.send('Sem cobertura!');
});

app.post('/coverage', (req, res) => {
  res.send('Sem cobertura!');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;