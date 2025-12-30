import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt, FaPython,
  FaNode
} from 'react-icons/fa';
import { SiVite, SiJest, SiExpress } from 'react-icons/si';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.header}>
        <h1>Compétences & Technologies</h1>
        <p className={styles.subtitle}>
      Compétences techniques que j'ai intégrées dans mes projets
        </p>
      </div>
      <div className={styles.categories}>

        <div className={styles.category}>
          <h2>Langages</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <FaJsSquare />
              <span>JavaScript</span>
            </div>
            <div className={styles.iconItem}>
              <FaHtml5 />
              <span>HTML</span>
            </div>
            <div className={styles.iconItem}>
              <FaCss3Alt />
              <span>CSS</span>
            </div>
             <div className={styles.iconItem}>
              <FaPython />
              <span>Python</span>
            </div>
          </div>
        </div>

        <div className={styles.category}>
          <h2>Frameworks & Bibliothèques</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <FaReact />
              <span>React</span>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2>Outils & Backend</h2>
          <div className={styles.icons}>
            <div className={styles.iconItem}>
              <SiVite />
              <span>Vite</span>
            </div>
            <div className={styles.iconItem}>
              <FaGitAlt />
              <span>Git</span>
            </div>
            <div className={styles.iconItem}>
              <SiJest />
              <span>Jest</span>
            </div>
            <div className={styles.iconItem}>
              <FaNode />
              <span>Node.js</span>
            </div>
            <div className={styles.iconItem}>
              <SiExpress />
              <span>Express.js</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;