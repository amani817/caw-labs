import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import styles from './styles/Global.module.css';

function App() {
  return (
    <div className={styles.app}>
      

      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;