import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';
const projects = [
  {
    id: 1,
    title: "Lab1",
    description: "Implémentation simple d'une page HTML pour découvrir les bases du web.",
    tech: ["HTML"],
    github: "https://github.com/amani817/caw-labs/tree/lab2-setup/Lab1",
    demo: ""
  }
,
  {
    id: 2,
    title: "Lab Node.js",
    description: "Développement d'une application backend avec Node.js pour gérer des requêtes HTTP.",
    tech: ["Node.js"],
    github: "https://github.com/amani817/caw-labs/tree/lab2-setup/lab-node",
    demo: ""
  },
  {
    id: 3,
    title: "Lab4",
    description: "Amélioration de la couverture de tests avec Jest pour assurer la qualité du code.",
    tech: ["Jest"],
    github: "https://github.com/amani817/Lab4_Jest",
    demo: ""
  },
  {
    id: 4,
    title: "Lab 5",
    description: "Version avancée d'une application React, intégrant des fonctionnalités et un design moderne.",
    tech: ["React"],
    github: "https://github.com/amani817/caw-labs/tree/lab2-setup/lab5/my-app",
    demo: ""
  },
  {
    id: 5,
    title: "Kanban Board – Lab 6",
    description: "Application Kanban complète avec une architecture claire, permettant de gérer des tâches efficacement.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/amani817/caw-labs/tree/lab2-setup/lab6",
    demo: ""
  },
  {
    id: 6,
    title: "PMS – Gestion Hôtelière",
    description: "Système complet de gestion hôtelière, facilitant l'organisation des réservations et des services.",
    tech: ["Node.js", "Express.js"],
    github: "https://github.com/amani817",
    demo: ""
  },
  {
    id: 7,
    title: "Application Restaurant",
    description: "Application de gestion pour restaurants, incluant la gestion des menus et des commandes dans différentes régions d'Algérie.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/khatitaha/dam",
    demo: ""
  },
  {
    id: 8,
    title: "Site Voitures",
    description: "Site vitrine moderne pour présenter des voitures, avec une interface élégante et responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/amani817",
    demo: ""
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>Projets</h1>
        <p className={styles.subtitle}>
          Une sélection de mes projets et labs réalisés durant le semestre
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;