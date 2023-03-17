import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces';
import usersModel from '../models/usersModel';
import { secret, config } from '../middlewares/jwtConfig';

const createUsers = async (user: IUsers) => {
  const payload = await usersModel.createUsers(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token, ...payload };
  return { status: 201, data };
};

export default createUsers;