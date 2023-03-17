import { Request, Response } from 'express';

import { ILogin, IUsers } from '../interfaces';
import usersService from '../services/usersService';

const createUsers = async (req: Request, res: Response) => {
  const users = req.body as IUsers;
  const { status, data } = await usersService.createUsers(users);
  return res.status(status).json(data);
};

const loginUsers = async (req: Request<object, object, ILogin>, res: Response) => {
  const { body } = req;
  const { status, data } = await usersService.loginUsers(body);
  return res.status(status).json(data);
};

export default { createUsers, loginUsers };