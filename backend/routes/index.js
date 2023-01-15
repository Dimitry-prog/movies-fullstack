import Router from 'express';
import userRouter from './UserRouter.js';
import movieRouter from './MovieRouter.js';

const router = new Router();

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => res.json({ message: 'Not found' }));

export default router;
