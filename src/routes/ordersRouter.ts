import { Router } from 'express';

import ordersController from '../controllers/ordersController';
import validatesToken from '../middlewares/validatesToken';
import validatesOrder from '../middlewares/validatesOrder';

const router = Router();

router.get('/', ordersController.getAll);
router.post(
  '/', 
  validatesToken,
  validatesOrder.validatesProductId,
  ordersController.createOrder,
);

export default router;