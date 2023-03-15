import express from 'express';
import productsRoutes from './routes/productsRouter';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

export default app;
