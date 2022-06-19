import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardList from './CardList';
import CardElement from './Card/CardElement';

describe('<CardList />', () => {
  const cardElements = [
    new CardElement('title1', 'description1', 'link1', 'image1', 'footer1'),
    new CardElement('title2', 'description2', 'link2', 'image2', 'footer2'),
  ];

  const renderComponent = () => {
    render(<CardList elements={cardElements} />);
  };

  test('it should mount', () => {
    renderComponent();
    
    const cards = screen.getAllByRole('button');

    expect(cards.length).toEqual(cardElements.length);
  });
});