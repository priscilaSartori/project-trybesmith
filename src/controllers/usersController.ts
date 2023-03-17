import { Request, Response } from 'express';

import { IUsers } from '../interfaces';
import usersService from '../services/usersService';

const createUsers = async (req: Request, res: Response) => {
  const users = req.body as IUsers;
  const { status, data } = await usersService(users);
  return res.status(status).json(data);
};

export default { createUsers };