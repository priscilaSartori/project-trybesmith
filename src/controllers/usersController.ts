import { Request, Response } from 'express';

import { IUsers } from '../interfaces';
import * as usersController from '../services/usersController';

// eslint-disable-next-line import/prefer-default-export
export async function createUsers(req: Request, res: Response) {
  const users = req.body as IUsers;
  const { status, user } = await usersController.createUsers(users);
  return res.status(status).json(user);
}
