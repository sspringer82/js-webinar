import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json([{ id: 1, firstname: 'Klaus' }]);
});

app.listen(8081);
