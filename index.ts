import express, { Express, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 8000;

const app: Express = express();

app.use(cors());

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(YAML.load('./openapi.yaml'))
);

app.get('/api/v1/status', (_, res: Response) => {
  res.send('Server ok');
  res.status(200);
});

app.listen(port, () => {
  console.log(`Server running in https://localhost:${port}`);
});
