import { Router } from 'express';

import createProduct from '../controllers/productsController';

const router = Router();

router.post('/', createProduct);

export default router;