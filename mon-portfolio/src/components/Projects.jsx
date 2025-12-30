import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    id: 1,
    title: "Kanban Board – Lab 3",
    description:
      "Application Kanban permettant la gestion des tâches avec drag & drop entre les colonnes To Do, In Progress et Done.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/meissem-riabi/lab-kanban",
    demo: ""
  },
  {
    id: 2,
    title: "Kanban Board – Lab 4",
    description:
      "Amélioration du tableau Kanban avec une meilleure gestion d’état et une interface plus fluide.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/meissem-riabi/lab-kanban",
    demo: ""
  },
  {
    id: 3,
    title: "Kanban Board – Lab 5",
    description:
      "Version avancée du Kanban Board avec logique optimisée et composants réutilisables.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/meissem-riabi/lab-kanban",
    demo: ""
  },
  {
    id: 4,
    title: "Kanban Board – Lab 6",
    description:
      "Application Kanban complète avec architecture claire et séparation des responsabilités.",
    tech: ["React", "Vite", "React DnD"],
    github: "https://github.com/meissem-riabi/kanban-board",
    demo: ""
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Application météo affichant les conditions climatiques en temps réel à partir d’une API externe.",
    tech: ["React", "Vite", "Axios", "Weather API"],
    github: "https://github.com/meissem-riabi/lab-weather",
    demo: "https://weather-meissem.netlify.app"
  },
  {
    id: 6,
    title: "PMS – Hotel Management",
    description:
      "Système de gestion hôtelière (PMS) pour organiser les réservations et les services.",
    tech: ["Node.js", "Express.js"],
    github: "https://github.com/meissem-riabi",
    demo: ""
  },
  {
    id: 7,
    title: "Restaurant App",
    description:
      "Application de gestion de restaurant couvrant les menus, commandes et organisation dans différentes wilayas d’Algérie.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/khatitaha/dam",
    demo: ""
  },
  {
    id: 8,
    title: "Cars Website",
    description:
      "Site vitrine moderne dédié à la présentation de voitures avec une interface élégante et responsive.",
    tech: ["React", "Vite"],
    github: "https://github.com/amani817",
    demo: ""
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>Projects</h1>
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