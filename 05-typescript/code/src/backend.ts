import express, { Request, Response } from 'express';

const app = express();
app.get('/', (request: Request, response: Response): void => {
  response.json({ name: 'Klaus' });
});

app.listen(8080, () => console.log('server is running'));
