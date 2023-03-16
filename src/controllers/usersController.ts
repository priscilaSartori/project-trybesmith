import { Request, Response } from 'express';

import { IUsers } from '../interfaces';
import * as usersService from '../services/usersService';

// eslint-disable-next-line import/prefer-default-export
export async function createUsers(req: Request, res: Response) {
  const users = req.body as IUsers;
  const { status, data } = await usersService.createUsers(users);
  return res.status(status).json(data);
}
