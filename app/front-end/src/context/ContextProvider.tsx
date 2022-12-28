import React, { ReactNode, useState } from 'react';
import CashContext, {ContextInterface} from './CashContext';

interface Props {
  children: ReactNode;
}

function Provider({ children }: Props) {
  const [receipt, setReceipt] = useState<any>([]);

  const value: ContextInterface = {
    receipt,
    setReceipt,
  };
  return (
    <CashContext.Provider value={ value }>
      {children}
    </CashContext.Provider>
  );
}

export default Provider;