import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import NavBar from 'components/layout/NavBar/NavBar';

const Layout = (props) => (
  <div className={styles.Layout}>
    <div>
      <div className={styles.Sky} />
      <div className={styles.TwinklingStars} />
      <div className={styles.Fog} />
    </div>
    
    <div className={styles.Page}>
      <div data-testid="NavBar">
        <NavBar />
      </div>
    
      <div data-testid="Content">
        { props.children }
      </div>
    </div>
    
    </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Layout.defaultProps = {};

export default Layout;
