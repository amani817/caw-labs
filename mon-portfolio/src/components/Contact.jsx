import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/ton-endpoint', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erreur lors de l\'envoi.');
      }
    } catch (error) {
      setStatus('Erreur lors de l\'envoi.');
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <h1>Contact</h1>
        <p>Envoyez-moi un message ou retrouvez-moi sur mes réseaux</p>
      </div>

      <div className={styles.info}>
        <p>Email: <a href="mailto:amaniamare25@gmail.com">amaniamare25@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/amani-soualmia" target="_blank" rel="noopener noreferrer">Mon Profil</a></p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Votre Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitBtn}>Envoyer</button>
      </form>

      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
};

export default Contact;