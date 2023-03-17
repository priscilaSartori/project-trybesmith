import jwt from 'jsonwebtoken';
import { IUsers, ILogin } from '../interfaces';
import usersModel from '../models/usersModel';
import { secret, config } from '../middlewares/jwtConfig';

const createUsers = async (user: IUsers) => {
  const payload = await usersModel.createUsers(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token, ...payload };
  return { status: 201, data };
};

const loginUsers = async (login: ILogin) => {
  const users = await usersModel.loginUsers(login);
  const validUsername = users.username.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);
  const invalidPassword = users.password.length < 6;
  if (!users.username) return { status: 400, message: '"username" is required' };
  if (!users.password) return { status: 400, message: '"password" is required' };
  if (!validUsername || invalidPassword) {
    return { status: 401, message: 'Username or password invalid' };
  }
  const token = jwt.sign({ users }, secret, config);
  const data = { token, ...users };
  return { status: 200, data };
};
export default { createUsers, loginUsers };