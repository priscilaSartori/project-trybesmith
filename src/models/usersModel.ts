import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUsers, Users, ILogin } from '../interfaces';

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

const loginUsers = async (login: ILogin): Promise<IUsers[]> => {
  const { username } = login;
  const [result] = await connection.execute<RowDataPacket[] & IUsers[]>(
    `SELECT * FROM Trybesmith.users 
    WHERE username = ?;`,
    [username],
  );
  return result;
};

const getIdUsername = async (username: string): Promise<Users[] | []> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return result as Users[] | [];
  // const result = await connection.execute<ResultSetHeader>(
  //   'SELECT * FROM Trybesmith.users WHERE username = ?',
  //   [username],
  // );
  // console.log('usermodel result', result);
  // return result as IUsers[];
};

export default { createUsers, loginUsers, getIdUsername };