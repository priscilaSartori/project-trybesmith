import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line import/prefer-default-export
export async function validates(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (username === undefined) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
}