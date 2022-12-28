import { Router } from 'express';
import CashController from '../controllers/CashController';

const router = Router();
const cashController = new CashController();

router.get('/', cashController.findAll.bind(cashController));

export default router;
