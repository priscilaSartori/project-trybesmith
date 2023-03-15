import { IUsers } from '../interfaces';
import * as usersModel from '../models/usersModel';

// eslint-disable-next-line import/prefer-default-export
export async function createUsers(IUser: IUsers) {
  const user = await usersModel.create(IUser);
  return { status: 201, user };
}