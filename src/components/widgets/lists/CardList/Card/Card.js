import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import CardElement from './CardElement';

const Card = (props) => {
  const image = props.image ? (
    <div>
      <img className={styles.CardImage} src={ props.image } alt={`${props.title}\'s image`} />
    </div>
  ) : (
    <div className={styles.CardImageText}>
      No image
    </div>
  );

  return (
    <div className={styles.Card} role='button' aria-label={`Go to project ${props.title}`} onClick={_ => goToPage(props.link)}>
      <h5>{props.title}</h5>
      {image}
      
      <div className={styles.CardText}>
        <p className={styles.CardDescription}>{props.description}</p>
        <p className={styles.CardFooter}>{props.footer}</p>
      </div>
    </div>
  )
};

const goToPage = (link) => {
  window.location.href = link;
};

Card.propTypes = PropTypes.instanceOf(CardElement).isRequired;

Card.defaultProps = {};

export default Card;
