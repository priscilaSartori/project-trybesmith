import { Router } from 'express';
import * as usersController from '../controllers/usersController';

const router = Router();
router.post('/', usersController.createUsers);

export default router;