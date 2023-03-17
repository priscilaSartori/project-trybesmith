import express from 'express';
import productsRoutes from './routes/productsRouter';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;
