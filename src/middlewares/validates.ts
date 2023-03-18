import { Request, Response, NextFunction } from 'express';

const validates = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (username === undefined) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default { validates };