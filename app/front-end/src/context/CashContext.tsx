import { createContext, Dispatch } from 'react';


export interface ContextInterface {
  receipt: any;
  setReceipt: Dispatch<any>;
}

const CashContext = createContext<ContextInterface | null>(null);

export default CashContext;