import React from 'react';
import dateFormater from '../services/moment';
function CardReceipt({value}: any) {
  const statusBuyer=
    [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida', 
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado'
    ]
    function formatValue(valor:number) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
    console.log(formatValue(Number(value.value)));
  return (

          <tr>
            <td>{value.nNf}</td>
            <td>{value.buyers.name}</td>
            <td>{value.providers.name}</td>
            <td>{dateFormater(value.emissionDate)}</td>
            <td>R$ {formatValue(Number(value.value))}</td>
            <td>{statusBuyer[value.orderStatusBuyer]}</td>
            <td><button> Dados do Cedente</button></td>
          </tr>

    
  );
}

export default CardReceipt;
