import express from 'express';
import { UserMessageController } from '../controller/UserMessgeController';

const router = express.Router();

router.post('/', UserMessageController.create);
router.get('/', UserMessageController.getAll);

export default router;
