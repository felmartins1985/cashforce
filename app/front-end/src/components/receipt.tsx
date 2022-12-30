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
          <tr data-testid={`orders-${value.id}`} className=' ml-[48px] mt-[16px] w-[1177px] h-[48px] bg-[#FFFFFF] box-border rounded-md border-[#DFE2EB] border-solid border-[1px] flex-none grow-0 order-1'>
            <td className=' absolute mt-[15px] ml-[30px] w-[30px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#4D5566]'>{value.nNf}</td>
            <td className=' absolute mt-[15px] ml-[201px] w-[90px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#4D5566]'>{value.buyers.name}</td>
            <td className=' absolute mt-[15px] ml-[355px] w-[98px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#4D5566]'>{value.providers.name}</td>
            <td className=' absolute mt-[15px] ml-[499px] w-[77px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#4D5566]'>{dateFormater(value.emissionDate)}</td>
            <td className=' absolute mt-[15px] ml-[648px] w-[87px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#00AD8C]'>{formatValue(Number(value.value))}</td>
            <td className=' absolute mt-[15px] ml-[821px] w-[100px] h-[18px] not-italic text-[14px] leading-[18px] flex items-center text-[#00AD8C]'>{statusBuyer[value.orderStatusBuyer]}</td>
            <td className=' border-[#CAD3FF] border-solid border-[1px] rounded-3xl mt-[8px] flex flex-row items-center absolute w-[165px] h-[32px] ml-[1004px] box-border pt-[8px] pb-[8px] pl-[29px] pr-[29px]'>
              <button className='text-[#727D94] text-[12px] leading-4 font-bold not-italic w-[120px] h-[16px] flex flex-none items-center order-0 grow-0'>Dados do Cedente</button></td>
          </tr>
  );
}

export default CardReceipt;
