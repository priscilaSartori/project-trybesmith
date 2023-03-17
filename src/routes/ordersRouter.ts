import { Router } from 'express';

import * as ordersController from '../controllers/ordersController';

const router = Router();

router.get('/', ordersController.getAll);

export default router;