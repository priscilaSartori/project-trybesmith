import jwt from 'jsonwebtoken';

const secret = 'secret';

const config: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (data: string) => {
  const token = jwt.sign({ data }, secret, config);
  return token;
};

const verifyToken = (token: string) => jwt.verify(token, secret);

export default { createToken, verifyToken };