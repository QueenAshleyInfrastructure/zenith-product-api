import express from 'express';
import dotenv from 'dotenv';
import './config/connection.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use('/api/products', productRouter);

app.listen(port, () => {
  console.log(`Product API listening on http://localhost:${port}`);
});

