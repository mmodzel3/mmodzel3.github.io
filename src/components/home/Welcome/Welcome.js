import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.scss';

const Welcome = () => (
  <div className={styles.Welcome} data-testid="Welcome">
    <div className={styles.WelcomeText}>
      <h1>Welcome!!!</h1>
      <h2>mmodzel3</h2>
    </div>
    <div></div>
  </div>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
