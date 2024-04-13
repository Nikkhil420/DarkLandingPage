import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const FooterS: FunctionComponent = () => {
  return (
    <footer className={styles.footerS}>
      <div className={styles.yourCompanyIncAllRightsWrapper}>
        <div className={styles.yourCompanyInc}>
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className={styles.socialsParent}>
        <img
          className={styles.socialsIcon}
      
          src="/x.png"
        />
        <img
          className={styles.socialsIcon1}
       
          src="/insta.png"
        />
        <img
          className={styles.socialsIcon2}

          src="/pinterest.png"
        />
        <img
          className={styles.socialsIcon3}
      
          src="/linkedin.png"
        />
        <img
          className={styles.socialsIcon4}
     
          src="/tiktok.png"
        />
        <img
          className={styles.socialsIcon5}
     
          src="/youtube.png"
        />
      </div>
    </footer>
  );
};

export default FooterS;
