export interface IReceipt {
  value:{
    id: number;
    orderNfId: string;
    orderNumber: string;
    orderPath: string;
    orderFileName: string;
    orderOriginalName: string;
    emissionDate: string;
    pdfFile: string;
    emitedTo: string;
    nNf: string;
    CTE: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    cnpjId: number;
    userId: number;
    buyerId: number;
    providerId: number;
    orderStatusBuyer: number;
    orderStatusProvider: string;
    deliveryReceipt: string;
    cargoPackingList: string;
    deliveryCtrc: string;
    buyers:{
      name: string;
      tradingName: string;
    };
    providers:{
      name: string;
      tradingName: string;
    }
  }
  
}