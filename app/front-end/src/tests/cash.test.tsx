/* eslint-disable testing-library/no-debugging-utils */
// import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { api } from '../services/request';
import { mock } from './mock';

const ARRAY_LOGIN_PAGE = ["cashlogo","handsgreen","receipt", "handsblue",
"invoice","showinvoice","table", "orders-1", "orders-2", "orders-3"]
describe('Testes do Homepage', () => {
  it('Testa se a tela homepage é renderizada na rota esperada', async () => {
    jest.spyOn(api,"get").mockResolvedValue({data: mock});
    renderWithRouter(<App />);
    await waitFor(() => {
      expect(screen.getByText(mock[0].nNf)).toBeInTheDocument();
    });
    ARRAY_LOGIN_PAGE.forEach((dataTestId) => {
      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    });
    });
});

 