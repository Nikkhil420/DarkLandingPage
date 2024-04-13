import { FunctionComponent } from "react";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <section className={styles.contactUsWrapper}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsMain}>
          <div className={styles.contactUsHead}>
            <h1 className={styles.h2}>Get instant access</h1>
            <div className={styles.contactUsBody}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className={styles.textWrap}>
            <div className={styles.textArea}>
              <div className={styles.nameemailcom}>name@email.com</div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.getForFree}>Get access</div>
            </div>
          </div>
        </div>
        <img
          className={styles.starIcon}
          src="/emojistar-1@2x.png"
        />
        <img
          className={styles.helix21Icon}
          src="/helix2-1@2x.png"
        />
      </div>
    </section>
  );
};

export default ContactUs;
