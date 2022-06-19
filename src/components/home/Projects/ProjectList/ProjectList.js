import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectList.module.scss';
import Project from '../Project';
import CardList from '../../../widgets/lists/CardList/CardList';

const ProjectList = (props) => (
  <div className={styles.ProjectList}>
    <CardList elements={props.projects} />
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
};

ProjectList.defaultProps = {};

export default ProjectList;
