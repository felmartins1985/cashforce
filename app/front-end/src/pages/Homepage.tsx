import React, { useEffect, useContext } from 'react';
import request from '../services/request';
import CashContext,{ContextInterface} from '../context/CashContext';
import CardReceipt from '../components/receipt';

function HomePage() {
  const { receipt, setReceipt } = useContext(CashContext) as ContextInterface;
  const Thead=["Nota Fiscal", "Sacado", "Cedente", "Emissão", "Valor", "Status"]
  const getAll= async () => {
    const response = await request();
    console.log(response);
    setReceipt(response);
  }
  useEffect(() =>{
    getAll();
  },[]);
  return (
    <div>
      <div>
        <h1>Cashforce</h1>
        <h2> Notas fiscais</h2>
      </div>
      <div>
      <h1>Notas Fiscais</h1>
      <h3>Visualize as notas fiscais que voce tem</h3>
        <table>
          <thead>
            <tr>
            {Thead.map((item) => <th key={item}>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {receipt.map((item:any) => (
              <CardReceipt key={item.id} value={item}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
