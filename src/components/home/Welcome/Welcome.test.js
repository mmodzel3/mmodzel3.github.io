import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from './Welcome';

describe('<Welcome />', () => {
  test('it should render correctly', () => {
    render(<Welcome />);
    
    const welcome = screen.queryByText('Welcome!!!');
    const nickname = screen.queryByText('Miozel');

    expect(welcome).toBeVisible();
    expect(nickname).toBeVisible();
  });
});