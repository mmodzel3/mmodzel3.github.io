import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

describe('<Layout />', () => {
  test('navigation bar should be visible', () => {
    render(<MemoryRouter>
            <Layout>Test</Layout>
          </MemoryRouter>);
    
    const navBar = screen.getByTestId('NavBar');

    expect(navBar).toBeVisible();
  });

  test('content should be visible', () => {
    render(<MemoryRouter>
            <Layout>Test</Layout>
          </MemoryRouter>);
    
    const content = screen.getByTestId('Content');
    const testText = screen.getByText(/Test/i)

    expect(content).toBeVisible();
    expect(testText).toBeVisible();
  });
});