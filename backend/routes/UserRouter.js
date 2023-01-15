import Router from 'express';
import { getUser, updateUserInfo } from '../controllers/UserController.js';

const router = new Router();

router.get('/me', getUser);
router.patch('/me', updateUserInfo);

export default router;
