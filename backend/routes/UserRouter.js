import Router from 'express';
import { getUser, updateUserInfo } from '../controllers/UserController.js';
import { validationUserInfo } from '../helpers/validationCelebrate.js';

const router = new Router();

router.get('/me', getUser);
router.patch('/me', validationUserInfo, updateUserInfo);

export default router;
