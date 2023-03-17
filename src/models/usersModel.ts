import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUsers, Users } from '../interfaces';

const createUsers = async (user: IUsers): Promise<Users> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUsers: Users = { id, username, vocation, level, password };
  return newUsers;
};

export default { createUsers };