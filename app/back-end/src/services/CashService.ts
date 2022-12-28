import CashModel from '../models/CashModel';

export default class CashService {
  constructor(
    private cashModel = new CashModel(),
  ) { }

  findAll = async () => {  
    const orders = await this.cashModel.findAll();
    return { code: 200, orders };
  };
}