import { Router } from 'express';
import loginController from '../controllers/usersController';
import { validates } from '../middlewares/validates';

const router = Router();
router.post('/', validates, loginController.loginUsers);

export default router;