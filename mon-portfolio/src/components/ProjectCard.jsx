import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.tech}>
          {tech.map((item, index) => (
            <span key={index} className={styles.badge}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <FaGithub />
          <span>Code</span>
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demo}
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;