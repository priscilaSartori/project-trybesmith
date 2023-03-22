import { Request, Response, NextFunction } from 'express';
import jwtConfig from './jwtConfig';

const validateauth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (authorization === undefined) return res.status(401).json({ message: 'Token not found' }); 
    const auth = jwtConfig.verifyToken(authorization);
    req.body.data = auth; 
    next();
  } catch (error) {
    res.status(401).json({ 
      message: 'Invalid token',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};

export default validateauth;