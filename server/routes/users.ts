import express from 'express';
import { changePassword, deletion, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import verifyToken from '../middlewares/verifyToken.js';

const userRoutes = express.Router();

userRoutes.put('/:userId', verifyToken, update);
userRoutes.delete('/:userId', verifyToken, deletion);
userRoutes.get('/find/:userId', getUser);
userRoutes.put('/sub/:userId', verifyToken, subscribe);
userRoutes.put('/unsub/:userId', verifyToken, unsubscribe);
userRoutes.put('/like/:videoId', verifyToken, like);
userRoutes.put('/dislike/:videoId', verifyToken, dislike);
userRoutes.put('/changePassword/:userId', verifyToken, changePassword);

export default userRoutes;