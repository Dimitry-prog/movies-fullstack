import Router from 'express';
import userRouter from './UserRouter.js';
import movieRouter from './MovieRouter.js';
import handleAuthUser from '../middlewares/handleAuthUser.js';
import { loginUser, logoutUser, registerUser } from '../controllers/AuthController.js';
import NotFoundError from '../errors/NotFoundError .js';
import { validationSignin, validationSignup } from '../helpers/validationCelebrate.js';
import { ERRORS_MESSAGE } from '../utils/constants.js';

const router = new Router();

router.post('/signup', validationSignup, registerUser);
router.post('/signin', validationSignin, loginUser);
router.get('/signout', logoutUser);

router.use(handleAuthUser);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(ERRORS_MESSAGE.notFound));
});

export default router;
