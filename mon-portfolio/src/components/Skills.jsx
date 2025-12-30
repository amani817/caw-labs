import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <h2>Compétences et Technologies</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;