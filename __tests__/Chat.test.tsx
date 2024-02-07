import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Chat from '../src/Components/Chat';
import steps from '../__fixtures__/steps';
import { Step } from '../src/interfaces/Step';

import '@testing-library/jest-dom';

test('Init state', () => {
  render(<Chat steps={steps as Step[]} />);
  expect(screen.getByText(/Открыть чат/i)).toBeInTheDocument();
});

test('Update steps', () => {
  render(<Chat steps={steps as Step[]} />);
  
  const button = screen.getByText(/Открыть чат/i);
  
  fireEvent.click(button);

  const startConversationButton = screen.getByText(/Начать разговор/i);

  fireEvent.click(startConversationButton);

  expect(screen.getByText(/Сменить профессию или трудоустроиться/i)).toBeInTheDocument();
  expect(screen.getByText(/Попробовать себя в IT/i)).toBeInTheDocument();
  expect(screen.getByText(/Я разработчик, хочу углубить свои знания/i)).toBeInTheDocument();
});

test('Scrolls to the new message when it is added', () => {
  render(<Chat steps={steps as Step[]} />);

  const button = screen.getByText('Начать разговор');
  fireEvent.click(button);

  // Проверяем, что метод scrollIntoView был вызван
  expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
});