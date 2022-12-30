import * as chai from 'chai';
import * as sinon from 'sinon';
import {app} from '../app';
import * as mocha from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');
import CashModel from '../models/CashModel';
chai.use(chaiHttp);
const { expect } = chai;
import { mock } from './mock';


  describe('Rota Get / ', () => {
    // before(async () => {
    //   sinon.stub(CashModel.prototype,'findAll').resolves(mock);
    // });
    // after(() => {
    //   (CashModel.prototype.findAll as sinon.SinonStub).restore();
    // });
    it('Retorna sem nenhum problema ', async () => {
      const result = await chai.request(app).get('/');
      expect(result.status).to.be.equal(200);
      expect(result.body).to.be.an('array');
      expect(result.body).to.deep.equal(mock);
    });
  });
