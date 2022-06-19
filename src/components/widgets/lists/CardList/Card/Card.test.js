import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import CardElement from './CardElement';
import userEvent from '@testing-library/user-event';

describe('<Card />', () => {
  const titleText = 'Title';
  const descriptionText = 'Description';
  const pageLink = 'http://google.com/';
  const imageLink = 'Image link';
  const footerText = 'Footer';
  const cardElement = new CardElement(titleText, descriptionText, pageLink, imageLink, footerText);

  const renderComponent = () => render(<Card {...cardElement} />);

  let realLocation;

  beforeAll(() => {
    realLocation = window.location;

    const mockLocation = new URL('http://localhost/');
    mockLocation.replace = jest.fn();

    delete window.location;

    window.location = mockLocation;
  });

  afterAll(() => {
    window.location = realLocation;
  });

  test('it should render correctly', () => {
    renderComponent();
    
    const title = screen.getByText(titleText);
    const image = screen.getByRole('img');
    const description = screen.getByText(descriptionText);
    const footer = screen.getByText(footerText);

    expect(title).toBeVisible();
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', imageLink);
    expect(image).toHaveAttribute('alt', `${titleText}\'s image`);
    expect(description).toBeVisible();
    expect(footer).toBeVisible();
  });

  test('when clicked it should redirect to page', () => {
    renderComponent();
    
    const card = screen.getByRole('button');

    userEvent.click(card);

    expect(window.location.href).toEqual(pageLink);
  });
});