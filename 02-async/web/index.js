import jsonServer from 'json-server';
import express from 'express';

const app = express();

app.use('/api', jsonServer.router('data.json'));

app.use(express.static('public'));

const port = 8081;
app.listen(port, () =>
  console.log(`Server is ready at http://localhost:${port}`)
);
