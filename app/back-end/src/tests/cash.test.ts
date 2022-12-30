import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import { describe }  from 'mocha';
import Orders from '../database/models/OrdersModel';
// @ts-ignore
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
import { mock } from './mock';


  describe('Rota Get / ', () => {
    before(async () => {
      sinon.stub(Orders,'findAll').resolves(mock);
    });
    after(() => {
      (Orders.findAll as sinon.SinonStub).restore();
    });
    it('Retorna sem nenhum problema ', async () => {
      const result = await chai.request(app).get('/');
      expect(result.status).to.be.equal(200);
      expect(result.body).to.be.an('array');
      expect(result.body).to.deep.equal(mock);
      expect(result.body).to.have.lengthOf(3);
    });
  });
