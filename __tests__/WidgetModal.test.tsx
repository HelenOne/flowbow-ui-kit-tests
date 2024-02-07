import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // Для расширенных матчеров Jest

import WidgetModal from '../src/Components/WidgetModal';
import { Step } from '../src/interfaces/Step';

import steps from '../__fixtures__/steps';


test('отображение и закрытие модального окна', () => {
  render(<WidgetModal steps={steps as Step[]} />);
  
  // Проверяем, что кнопка "Открыть Чат" присутствует на экране
  const openButton = screen.getByText(/Открыть Чат/i);
  expect(openButton).toBeInTheDocument();
  
  // Имитируем клик по кнопке открытия чата
  fireEvent.click(openButton);
  
  // Проверяем, что модальное окно появляется
  expect(screen.getByText(/Виртуальный помощник/i)).toBeInTheDocument();
  
  // Имитируем клик по кнопке закрытия модального окна
  const closeButton = screen.getByLabelText(/закрыть/i);
  fireEvent.click(closeButton);
  
  // Проверяем, что модальное окно закрывается
  expect(screen.queryByText(/Виртуальный помощник/i)).not.toBeInTheDocument();
});

// Другие тесты...
