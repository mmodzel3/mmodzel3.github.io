import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className={styles.NavBar}>
    <nav>
      <Link className={styles.NavHome} to="/">M</Link>
      <Link className={styles.NavLink} to="/">Home</Link>
    </nav>
  </div>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
