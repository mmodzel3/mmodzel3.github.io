import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardList.module.scss';
import CardElement from './Card/CardElement';
import Card from './Card/Card';

const CardList = (props) => (
  <div className={styles.CardList}>
    { props.elements.map((cardElement, i) => 
        <Card key={i} {...cardElement} />
    ) }
  </div>
);

CardList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.instanceOf(CardElement)).isRequired,
};

CardList.defaultProps = {};

export default CardList;
