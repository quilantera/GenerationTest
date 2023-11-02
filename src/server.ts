import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});