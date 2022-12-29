import React, { useEffect, useContext } from 'react';
import request from '../services/request';
import CashContext,{ContextInterface} from '../context/CashContext';
import CardReceipt from '../components/receipt';
import Vectorverde from '../images/Vectorverde.png';
import Vectorpreta from '../images/Vectorpreta.png';
import Vectorc from '../images/Vectorc.png';
import Vectora from '../images/Vectora.png';
import Vectors from '../images/Vectors.png';
import Vectorh from '../images/Vectorh.png';
import Vectorf from '../images/Vectorf.png';
import Vectoro from '../images/Vectoro.png';
import Vectorr from '../images/Vectorr.png';
import Vectorc2 from '../images/Vectorc2.png';
import Vectore from '../images/Vectore.png';
import Vectormao from '../images/Vectormao.png';
import Vectormaopreta from '../images/Vectormaopreta.png';

function HomePage() {
  const { receipt, setReceipt } = useContext(CashContext) as ContextInterface;
  const getAll= async () => {
    const response = await request();
    console.log(response);
    setReceipt(response);
  }
  useEffect(() =>{
    getAll();
  },[]);
  return (
    <div >
      <div className='bg-[#FBFDFE] absolute w-[1560px] h-[900px]'>
        <img className='absolute mt-[25px] ml-[24px] w-[29.58px] h-[20.51px]' src={Vectorverde} alt='vetorVerde'></img>
        <img className='absolute mt-[34.49px] ml-[33.05px] w-[29.58px] h-[20.51px]' src={Vectorpreta} alt='vetorPreto'></img>
        <img className='absolute mt-[28.5px] ml-[67.97px] w-[16.46px] h-[19.7px]' src={Vectorc} alt='vetorC'></img>
        <img className='absolute mt-[35.15px] ml-[84.59px] w-[13.42px] h-[13.06px]' src={Vectora} alt='vetorA'></img>
        <img className='absolute mt-[35.15px] ml-[99.53px] w-[10.92px] h-[13.06px]' src={Vectors} alt='vetorS'></img>
        <img className='absolute mt-[28.45px] ml-[112.25px] w-[14.44px] h-[23.32px]' src={Vectorh} alt='vetorH'></img>
        <img className='absolute mt-[28.23px] ml-[126.6px] w-[10.59px] h-[23.54px]' src={Vectorf} alt='vetorF'></img>
        <img className='absolute mt-[35.14px] ml-[135.8px] w-[13.53px] h-[13.06px]' src={Vectoro} alt='vetorO'></img>
        <img className='absolute mt-[35.14px] ml-[151.02px] w-[8.32px] h-[12.81px]' src={Vectorr} alt='vetorR'></img>
        <img className='absolute mt-[35.15px] ml-[159.3px] w-[11.47px] h-[13.06px]' src={Vectorc2} alt='vetorC2'></img>
        <img className='absolute mt-[35.15px] ml-[171.26px] w-[12.74px] h-[13.06px]' src={Vectore} alt='vetorE'></img>
        <img className='absolute mt-[105px]  ml-[25px] box-border w-[24px] h-[14.06px]' src={Vectormao} alt='Mao'></img>
        <h2 className='absolute w-[85px] h-[18px] text-[#00AD8C] mt-[103px] ml-[64px] flex flex-none order-0 grow-0 not-italic font-medium text-[14px] leading-[18px] items-center'>Notas fiscais</h2>
        <div className='w-[4px] h-[64px] rounded bg-[#00AD8C] mt-[80px] flex flex-none order-0 grow-0'></div>

      </div>
      <div className='absolute w-[1272px] h-[900px] left-[288px] bg-[#FFFFFF] right-0 bottom-0 top-0 shadow-cash rounded-[15px_0px_0px_15px]'>
      <p className='h-[0px] border-[#DFE2EB] border-solid border-[1px]  w-[1272px] absolute top-[64px] left-[0%] right-[0%] bottom-[0%]'></p>
      <div className='absolute flex flex-col items-end w-[1272px] h-[64px] pt-[16px] pr-[46px] pb-[16px] pl-[46px] gap-[10px] left-[0px] top-[0px] bg-[#FFFFFF] rounded-[12px_0px_0px_0px]'></div>
      <img className='absolute mt-[111px]  ml-[48px] box-border w-[24px] h-[14.06px]' src={Vectormaopreta} alt='MaoPreta'></img>

      <h1 className='w-[160px] h-[28px] left-[33px] font-bold text-[24px] leading-7 mt-[104px] ml-[81px] not-italic text-[#021B51] flex-none grow-0 order-1'>Notas fiscais</h1>
      <h3 className='h-[20px] w-[255] text-[#727D94] not-italic font-normal text-[14px] leading-5 flex-none grow-0 order-1 mt-[5px] ml-[48px]'>Visualize as notas fiscais que você tem</h3>
        <table>
          <thead>
            <tr>
            <th className='ml-[78px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Nota Fiscal</th>
            <th className='ml-[249px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Sacado</th>
            <th className='ml-[403px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Cedente</th>
            <th className='ml-[547px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Emissão</th>
            <th className='ml-[698px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Valor</th>
            <th className='ml-[869px] mt-[22px] text-[#A1A8B8] font-bold absolute  not-italic text-[12px] leading-4 flex items-center uppercase rounded'>Status</th>

            </tr>
          </thead>
          <tbody className='flex flex-col mt-[41px]'>
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
