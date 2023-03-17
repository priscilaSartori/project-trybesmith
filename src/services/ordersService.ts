import loginModel from '../models/ordersModel';
import { ILogin } from '../interfaces';

const getAll = async (): Promise<ILogin[]> => {
  const login = await loginModel.getAll();
  return login;
};
const loginService = { getAll };

export default loginService;