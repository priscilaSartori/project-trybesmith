import { Router } from 'express';
import loginController from '../controllers/usersController';
import validatesLogin from '../middlewares/validatesLogin';

const router = Router();
router.post('/', validatesLogin.validates, loginController.loginUsers);

export default router;