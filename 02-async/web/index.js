import jsonServer from 'json-server';
import express from 'express';

const app = express();

app.use('/api', jsonServer.router('data.json'));

app.use(express.static('public'));

app.listen(8081);
