import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectList from './ProjectList';
import Project from '../Project';

describe('<ProjectList />', () => {
  const projectsList = [
    new Project('title1', 'description1', 'link1', 'image1', 'technology1'),
    new Project('title2', 'description2', 'link2', 'image2', 'technology2'),
  ];

  test('it should render correctly', () => {
    render(<ProjectList projects={projectsList}/>);
    
    const title1 = screen.queryByText(projectsList[0].title);
    const title2 = screen.queryByText(projectsList[1].title);

    expect(title1).toBeVisible();
    expect(title2).toBeVisible();
  });
});