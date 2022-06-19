import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
  test('welcome should be visible', () => {
    render(<Home />);
    
    const welcome = screen.queryByText('Welcome!!!');

    expect(welcome).toBeVisible();
  });

  test('projects should be visible', () => {
    render(<Home />);
    
    const projects = screen.queryByText('Projects');

    expect(projects).toBeVisible();
  });
});