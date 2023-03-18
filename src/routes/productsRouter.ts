import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import validatesProducst from '../middlewares/validatesProducst';

const router = Router();

router.post(
  '/', 
  validatesProducst.validatesName,
  validatesProducst.validatesAmount, 
  productsController.createProduct,
);
router.get('/', productsController.getAllProduct);

export default router;