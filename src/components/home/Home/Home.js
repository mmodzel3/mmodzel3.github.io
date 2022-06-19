import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import Welcome from 'components/home/Welcome/Welcome';
import Projects from 'components/home/Projects/Projects';

const Home = () => (
  <div className={styles.Home}>
    <Welcome />
    <Projects />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
