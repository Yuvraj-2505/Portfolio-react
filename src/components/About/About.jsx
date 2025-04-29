import React from 'react';
import styles from './About.module.css';
const About = () => {
  return <section className={styles.containers}>
    <h2 className={styles.title}>About</h2>
    <p className={styles.details}>I'm a passionate Frontend Developer committed to transforming ideas into interactive, user-friendly digital experiences. With a strong foundation in HTML, CSS,vJavaScript and React.js, I specialize in crafting responsive web designs and dynamic interfaces that bring brands to life online. From elegant layouts to pixel-perfect visuals, my coding expertise ensures every project is tailored to meet the needs of modern users.</p>
    <div className={styles.content}>
      <img src="public/assets/About/aboutImage.png" alt="Me siiting with a laptop" className={styles.aboutImage}/>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src="public/assets/About/cursorIcon.png" alt="Cursor button" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm a frontend developer with experince in building responsive and optimized sities</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="public/assets/About/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
      </ul>
    </div>
  </section>
}

export default About;
