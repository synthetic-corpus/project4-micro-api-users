import {Router, Request, Response} from 'express';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/users', UserRouter);

router.get('/healthy', async (req: Request, res: Response) => {
  res.send(`V0 - User API is UP`);
});

export const IndexRouter: Router = router;
