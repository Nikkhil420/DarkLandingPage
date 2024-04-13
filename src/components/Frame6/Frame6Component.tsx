import React from "react";
import styles from "./Frame6Component.module.css";

const Frame6Component = () => {
  return (
    <section className={styles.MainContainer}>
      <div className={styles.container1}>
        <div className={styles.headMainWrap}>
          <div className={styles.headMain}>
           
            <h2 className={styles.h2}>Intuitive interface</h2>
            <h3 className={styles.body}>
            Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
            </div>
          </div>
          <div className={styles.wrapperAppNight}>
          <img
            className={styles.appNightIcon}
            src="/app-night@2x.png"
          />
        </div>
        </div>


    
    </section>
  );
};

export default Frame6Component;
