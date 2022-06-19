import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('<NavBar />', () => {
  test('menu buttons should be visible', () => {
    render(<MemoryRouter>
            <NavBar />
          </MemoryRouter>);
    
    const homeButton = screen.queryByText(/Home/i);

    expect(homeButton).toBeVisible();
  });
});