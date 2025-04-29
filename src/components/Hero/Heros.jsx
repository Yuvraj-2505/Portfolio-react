import React from 'react'
import styles from "./Hero.module.css";
const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yuvraj</h1>
        <p className={styles.description}>
        {/* I'm a passionate Frontend Developer committed to transforming ideas into interactive, user-friendly digital experiences. With a strong foundation in HTML, CSS,vJavaScript and React.js, I specialize in crafting responsive web designs and dynamic interfaces that bring brands to life online. From elegant layouts to pixel-perfect visuals, my coding expertise ensures every project is tailored to meet the needs of modern users. */}
        I'm a frontend developer with specalisation in Reactjs. I'm also proficient in HTML, CSS, and JavaScript. I'm currently Learning, but I'm always looking for opportunities to collaborate with exciting clients.
        </p>
        <a href="mailto:yuvrajprasad1590@gmail.com" className={styles.containerBtn} >
            Contact Me
        </a>
    </div>
    <img src="public/assets/Hero/WhatsApp Image 2025-04-16 at 12.37.21_aca3b1a0.jpg" alt="MY Image" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottumBlur} />
  </section>
}

export default Hero;