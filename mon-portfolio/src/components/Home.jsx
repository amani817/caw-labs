import styles from '../styles/Home.module.css';
import { FaLaptopCode, FaReact, FaMobileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <section className={styles.hero} id="home">
      <span className={styles.portfolioText}>PORTFOLIO</span>

      <div className={styles.heroContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wEhRL2vuHZWUHjeBqRw9_Od1x820RoIwEw&s"
          alt="Amani Soualmia"
          className={styles.photo}
        />
        <div className={styles.content}>
          <h1 className={styles.name}>Amani Soualmia</h1>
          <h2 className={styles.role}>
      Développeur (Front/Back)-End & Designer 
    </h2>

          <p className={styles.bio}>
      Étudiant en développement web et mobile, spécialisé dans les technologies modernes 
      comme <strong>React</strong>,<strong>Python</strong>, 
      et les outils associés .
      <br /><br />
      Ce portfolio regroupe une sélection de projets personnels et académiques 
      réalisés avec rigueur, en mettant l’accent sur la performance, 
      l’expérience utilisateur et le code propre.
    </p>

        <div className={styles.info}>
  <h3>Informations personnelles</h3>
  <ul>
    <li>📍 Localisation : Algérie</li>
    <li>🎓 Études : Université Abdelhamid Mehri, Constantine - Faculté d'informatique, Spécialité Sciences et Technologies de l'information et de la communication</li>
    <li>💻 Technologies préférées : React, Node.js, Express.js</li>
    <li>⚡ Hobbies : Lecture, Programmation ...</li>
  </ul>
</div>

          <div className={styles.expertise}>
            <h3>Mon Expertise</h3>

            <div className={styles.expertSection}>
              <h4>
                <FaLaptopCode style={{ marginRight: '8px', color: '#38bdf8' }}/>
                Software Development
              </h4>
             <p>Expérimenté en programmation fonctionnelle et orientée objet : 
  <strong>Dart</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>JavaScript</strong> 
  . J'ai également une bonne connaissance de la programmation asynchrone et des conceptions orientées services.
</p>
            </div>
            <div className={styles.expertSection}>
              <h4>
                <FaReact style={{ marginRight: '8px', color: '#61dafb' }}/>
                Frontend Dev
              </h4>
              <p>React, NextJS,expresse. Passionné par l’UI/UX. Plus de 4 ans d’expérience en HTML, CSS, JS et expresse.</p>
            </div>

            <div className={styles.expertSection}>
              <h4>
                <FaMobileAlt style={{ marginRight: '8px', color: '#ff6f61' }}/>
                Flutter Dev
              </h4>
              <p>
               Développement d'applications mobiles hybrides pour Android et iOS avec <strong>Flutter</strong>. 
  J'ai conçu des interfaces utilisateur fluides, intégré des API tierces.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <a href="#projects" className={styles.primaryBtn}>Voir mes projets</a>
        <a href="#contact" className={styles.secondaryBtn}>Me contacter</a>
      </div>

      <nav className={styles.tableOfContents}>
        <h3>Table des matières</h3>
        <div className={styles.pills}>
          <a href="#home" className={styles.pill}>Introduction</a>
          <a href="#projects" className={styles.pill}>Projets</a>
          <a href="#skills" className={styles.pill}>Compétences</a>
          <a href="#contact" className={styles.pill}>Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default Home;