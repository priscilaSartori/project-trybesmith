import jwt from 'jsonwebtoken';
import { IUsers, ILogin } from '../interfaces';
import usersModel from '../models/usersModel';

const secret = 'Trybe';

const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};

const createUsers = async (user: IUsers) => {
  const payload = await usersModel.createUsers(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token, ...payload };
  return { status: 201, data };
};

const loginUsers = async (login: ILogin) => {
  const users = await usersModel.loginUsers(login);
  if (users.length === 0 || users[0].password !== login.password) {
    const message = { message: 'Username or password invalid' };
    return { status: 401, data: message };
  }
  const token = jwt.sign({ users }, secret, config);
  const data = { token, ...users };
  return { status: 200, data };
};

export default { createUsers, loginUsers };