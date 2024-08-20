import React from "react";
import styles from "./card.module.css";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://pennstatehealthnews.org/wp-content/uploads/2020/12/Vaccine_vials.jpg"
        alt="Vaccine Information"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h2>Covid-19 Vaccines</h2>
        <p>Vaccines are safe and effective at preventing Covid-19.</p>
      </div>
    </div>
  );
};

export default Card;
