import { Router } from 'express';

import ordersController from '../controllers/ordersController';

const router = Router();

router.get('/', ordersController.getAll);

export default router;