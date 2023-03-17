import { Router } from 'express';
import loginController from '../controllers/usersController';

const router = Router();
router.post('/', loginController.loginUsers);

export default router;