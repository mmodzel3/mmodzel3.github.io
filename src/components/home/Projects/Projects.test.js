import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from './Projects';
import Project from './Project';

describe('<Projects />', () => {
  const renderComponent = () => render(<Projects />);

  test('it should render correctly', () => {
    renderComponent();
    
    const projects = screen.queryByText('Projects');

    expect(projects).toBeVisible();
  });
});