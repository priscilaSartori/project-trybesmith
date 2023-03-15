import { Router } from 'express';

import * as productsController from '../controllers/productsController';

const router = Router();

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProduct);

export default router;