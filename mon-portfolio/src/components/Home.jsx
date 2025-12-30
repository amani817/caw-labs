import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.hero} id="home">
      {/* Background text */}
      <span className={styles.portfolioText}>PORTFOLIO</span>

      {/* Profile photo */}
      <img
        src="/assets/developpeur-web.jpeg"
        alt="Amani Soualmia"
        className={styles.photo}
      />

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.name}>Amani Soualmia</h1>
        <h2 className={styles.role}>Junior React and vite Developer</h2>

        <p className={styles.bio}>
          Étudiant passionné par le développement web moderne.
          Ce portfolio présente une sélection de mes projets réalisés
          avec React et Vite durant le semestre.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryBtn}>
            Voir mes projets
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Me contacter
          </a>
        </div>
      </div>

      {/* Table of contents */}
      <nav className={styles.tableOfContents}>
        <h3>Table of contents</h3>
        <div className={styles.pills}>
          <a href="#home" className={styles.pill}>Introduction</a>
          <a href="#projects" className={styles.pill}>Projects</a>
          <a href="#skills" className={styles.pill}>Skills</a>
          <a href="#contact" className={styles.pill}>Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default Home;