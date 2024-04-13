import { FunctionComponent } from "react";
import styles from "./NavBarDesktop.module.css";



const NavBarDesktop: FunctionComponent = () => {
  return (
    <header className={styles.navBarDesktop}>
      <div className={styles.logo}>
        <div className={styles.logodefault}>
          <div className={styles.logodefaultChild} />
          <img
            className={styles.logosaasIcon}
            loading="lazy"
            alt=""
            src="/logosaas@2x.png"
          />
        </div>
        <div className={styles.madeBy}>made by</div>
        <img
          className={styles.blackHorizontal1Icon}
          loading="lazy"
          alt=""
          src="/blackhorizontal1.png"
        />
      </div>
      <div className={styles.stack}>
        <div className={styles.about}>About</div>
        <div className={styles.features}>Features</div>
        <div className={styles.customers}>Customers</div>
        <div className={styles.updates}>Updates</div>
        <div className={styles.help}>Help</div>
        <div className={styles.buttons}>
          <div className={styles.getForFree}>Get for free</div>
        </div>
      </div>
      <div className={styles.menuIcon}>
  <img  src="/menuIcon.png"  alt="" />
</div>

    </header>
  );
};

export default NavBarDesktop;
