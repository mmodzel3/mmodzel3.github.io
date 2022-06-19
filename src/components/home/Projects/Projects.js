import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.scss';
import ProjectList from './ProjectList/ProjectList';
import Project from './Project';

const projectList = [
  new Project('LostFinder', 'This project is a mobile application for Android that can be used to help searching of missing people.', 'https://github.com/mmodzel3/LostFinder', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/767px-Android_robot.svg.png?20180121030125', 'Kotlin - Android'),
  new Project('LostFinder Server', 'This project is a server for Android application LostFinder.', 'https://github.com/mmodzel3/LostFinderServer', 'https://www.dariawan.com/media/images/tutorial-spring-logo.width-1024.png', 'Java - Spring'),
  new Project('BikeRental', 'This project is bike rental application implemented in Java Spring and Angular. Angular project is available public, but server has private access.', 'https://github.com/jancurevic/BikeRental', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png', 'Angular'),
  new Project('Space Agency Task', 'Implement a sample data hub application for space agencies. Space agencies store their satellites images (products) in large data hubs.', 'https://github.com/mmodzel3/Space-Agency-Task', 'https://www.dariawan.com/media/images/tutorial-spring-logo.width-1024.png', 'Java - Spring'),
  new Project('Simulated Annealing', 'Optimization of the publication set in terms of maximizing points: the use of simulated annealing, binary representation, penalty function for unacceptable solutions.', 'https://github.com/dumi97/ALHE-Simulated-Annealing', 'https://www.researchgate.net/profile/Omid-Ghasemalizadeh-2/publication/308786233/figure/fig1/AS:412751978614791@1475419148801/Simulated-Annealing-optimization-of-a-one-dimensional-objective-function.png', 'Python'),
  new Project('Random Forest', 'Optimization of the publication set in terms of maximizing points: the use of simulated annealing, binary representation, penalty function for unacceptable solutions.', 'https://github.com/Terhon/MOW-RandomForest', 'https://www.frontiersin.org/files/MyHome%20Article%20Library/284242/284242_Thumb_400.jpg', 'R'),
  new Project('Pokemon Task', 'Using data from Pokemon API (pokeapi.co) calculate attack multiplier for specific Pokemon type against other types.', 'https://github.com/mmodzel3/Pokemon-Task', 'https://assets.pokemon.com/assets/cms2/img/misc/countries/pl/country_detail_pokemon.png', 'Python'),
  new Project('Domino Task', 'Simulate domino arrangement representated as literals.', 'https://github.com/mmodzel3/Domino-task', 'https://img.pixers.pics/pho_wat(s3:700/FO/20/64/59/96/700_FO20645996_723e3aa46a507bc65cdb0e6538aa59f7.jpg,491,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,271,650,jpg)/fototapety-domino-gry.jpg.jpg', 'Python'),
  new Project('FN1 Classification', 'Task - fnc-1 - classifying headlines and texts similarities.', 'https://github.com/mmodzel3/fnc-1-classification', 'https://miro.medium.com/max/463/1*NSK8ERXexyIZ_SRaxioFEg.png', 'Python - Jupyter Notebook'),
];

const Projects = () => (
  <div className={styles.Projects}>
    <h1>Projects</h1>
    <ProjectList projects={projectList} />
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
