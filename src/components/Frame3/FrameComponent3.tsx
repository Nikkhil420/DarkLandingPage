import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.coreSafariBigSurToolbar} />
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <div className={styles.featureCardContainer}>
              <div className={styles.version20Is}>Version 2.0 is here</div>
              <div className={styles.readMoreParent}>
                <div className={styles.readMore}>Read more</div>
                <img className={styles.icons} alt="" src="/WhitearrowIcon.png" />
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>
            <p className={styles.oneTask}>One Task</p>
            <p className={styles.atATime}>at a Time</p>
          </h1>
          <h3 className={styles.body}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <div className={styles.buttons}>
            <div className={styles.getForFree}>Get for free</div>
          </div>

          <div className={styles.getFreeButton}>
            <div className={styles.wrapperCursor1}>
            <img className={styles.cursor2Icon} alt="" src="/cursor.png" />
            </div>
          </div>
          <div className={styles.helixShape}>
            <div className={styles.wrapperMessage2}>
              <img
                className={styles.message2Icon}
                alt=""
                src="/message.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
