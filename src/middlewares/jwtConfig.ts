import jwt from 'jsonwebtoken';

const secret = 'secret';

const config: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (data: string) => jwt.sign({ data }, secret, config);

const verifyToken = (token: string) => jwt.verify(token, secret);

export default { createToken, verifyToken };