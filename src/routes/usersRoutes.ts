import { Router } from 'express';
import usersController from '../controllers/usersController';
import validatesUsers from '../middlewares/validatesUsers';

const router = Router();
router.post(
  '/', 
  validatesUsers.validatesUsername,
  validatesUsers.validatesVocation,
  validatesUsers.validatesLevel,
  validatesUsers.validatesPassword,
  usersController.createUsers,
);

export default router;