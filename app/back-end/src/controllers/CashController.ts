import { Request, Response } from 'express';
import CashService from '../services/CashService';

export default class OrdersController {
  private cashService: CashService;

  constructor() {
    this.cashService = new CashService();
  }

  findAll = async (req: Request, res: Response) => {  
    const { code, orders } = await this.cashService.findAll();
    return res.status(code).json(orders);
  };
}