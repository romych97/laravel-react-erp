import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { getProductsService } from '../../services/products/products';
import BasicProducts from '../../app/admin/products/page';

jest.mock('../../services/products/products', () => ({
  getProductsService: jest.fn(),
}));

describe('BasicProducts', () => {
  it('fetches products on mount', async () => {
    const mockResponse = { data: { payload: [{ id: 1, name: 'Product 1' }] } };
    getProductsService.mockResolvedValue(mockResponse);

    render(<BasicProducts />);

    // Проверяем, что функция вызвана
    expect(getProductsService).toHaveBeenCalledTimes(1);

    // Ждем, пока компонент отрендерится с данными
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });
  });

  // Дополнительные тесты могут быть добавлены здесь
});
