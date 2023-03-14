import { Router } from 'express';

import * as productsControllers from '../controllers/productsController';

const router = Router();

router.post('/', productsControllers.createProducts);

export default router;