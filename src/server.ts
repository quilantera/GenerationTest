import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocs from './swagger.json';
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);


const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});