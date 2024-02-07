// Предположим, что ваш файл с тестами называется Chat.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';  // Для расширенных матчеров Jest

import Chat from '../src/Components/Chat';
import steps from '../__fixtures__/steps';
import { Step } from '../src/interfaces/Step';

import '@testing-library/jest-dom';

test('Init state', () => {
  render(<Chat steps={steps as Step[]} />);
  expect(screen.getByText(/Привет! Я ваш виртуальный помощник/i)).toBeInTheDocument();
});

test('Update steps', () => {
  render(<Chat steps={steps as Step[]} />);
  
  const button = screen.getByText(/Интересно/i);
  
  fireEvent.click(button);
  
  expect(screen.getByText(/У нас есть подготовительные курсы/i)).toBeInTheDocument();
  
  expect(screen.getByText(/Интересно/i)).toBeInTheDocument();
});

// Другие тесты...

