import Providers from '../database/models/ProvidersModel';
import Buyers from '../database/models/BuyersModel';
import Orders from '../database/models/OrdersModel';
import { ICash } from '../interfaces/ICash';

export default class CashModel {
  findAll = async (): Promise<ICash[]> => {
    const orders = await Orders.findAll({
      include: [
        { model: Buyers, as: 'buyers', attributes: ['name', 'tradingName'] },
        { model: Providers, as: 'providers', attributes: ['name', 'tradingName'] },
      ],
    });
    return orders;
  };
}
