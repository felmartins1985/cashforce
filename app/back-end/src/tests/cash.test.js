const chai = require('chai');

const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const app = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;
 const mock={
  "id": 1,
  "orderNfId": "1605181324132",
  "orderNumber": "18153",
  "orderPath": null,
  "orderFileName": null,
  "orderOriginalName": null,
  "emissionDate": "2020-10-30T11:00:00-03:00",
  "pdfFile": null,
  "emitedTo": "22843980000127",
  "nNf": "18153",
  "CTE": "",
  "value": "198450",
  "createdAt": "2020-10-30T17:54:18.000Z",
  "updatedAt": "2020-10-30T17:54:18.000Z",
  "cnpjId": 1,
  "userId": 1,
  "buyerId": 1,
  "providerId": 1,
  "orderStatusBuyer": "0",
  "orderStatusProvider": "0",
  "deliveryReceipt": null,
  "cargoPackingList": null,
  "deliveryCtrc": null,
  "buyers": {
    "name": "SACADO 001",
    "tradingName": "SACADO 001 LTDA"
  },
  "providers": {
    "name": "CEDENTE 002",
    "tradingName": "CEDENTE 002 LTDA"
  }
}

describe('Rota /', () => {
  describe('Rota Get / ', () => {
    it('Retorna sem nenhum problema ', async () => {
      const result = await chai.request(app).get('/');
      expect(result.status).to.be.equal(200);
      expect(result.body).to.be.an('object');
      expect(result.body).to.deep.equal(mock);
    });
  });
});