import Router from 'express';
import userRouter from './UserRouter.js';
import movieRouter from './MovieRouter.js';
import handleAuthUser from '../middlewares/handleAuthUser.js';
import { loginUser, logoutUser, registerUser } from '../controllers/AuthController.js';
import NotFoundError from '../errors/NotFoundError .js';

const router = new Router();

router.post('/signup', registerUser);
router.post('/signin', loginUser);
router.get('/signout', logoutUser);

router.use(handleAuthUser);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Path not found'));
});

export default router;
