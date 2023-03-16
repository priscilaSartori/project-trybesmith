import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces';
import * as usersModel from '../models/usersModel';
import { secret, config } from '../middlewares/jwtConfig';

// eslint-disable-next-line import/prefer-default-export
export async function createUsers(user: IUsers) {
  const payload = await usersModel.createUsers(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token, ...payload };
  return { status: 201, data };
}