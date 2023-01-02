import { createContext, Dispatch } from 'react';
import { IReceipt } from '../interface/IReceipt';

export interface ContextInterface {
  receipt: IReceipt[];
  setReceipt: Dispatch<IReceipt>;
}

const CashContext = createContext<ContextInterface | null>(null);

export default CashContext;