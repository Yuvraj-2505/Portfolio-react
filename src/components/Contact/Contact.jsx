import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="public/assets/Contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:yuvrajprasad1590.com">Yuvraj@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="public/assets/Contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/yuvraj-prasad-72636332a">linkedin.com/Yuvraj</a>
        </li>
        <li className={styles.link}>
          <img src="public/assets/Contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/Yuvraj-2505?tab=repositories">github.com/Yuvraj</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
