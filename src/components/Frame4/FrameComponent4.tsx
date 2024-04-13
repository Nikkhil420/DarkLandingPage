import React from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.LogoTickerWrap}>
      <div className={styles.LogoTicker}>
        <div className={styles.Frame29}>
          <div className={styles.trustedByThe}>
            Trusted by the world’s most innovative teams
          </div>
          </div>
          <div className={styles.Frame21Wrap}>
         
              <img className={styles.acme} src="/acme.png" alt="" />
   
         
              <img className={styles.quantum} src="/quantum.png" alt="" />
    
            <div className={styles.echoWrap}>
              <img className={styles.echo} src="/echo.png" alt="" />
            </div>
            <div className={styles.celestiaWrap}>
              <img className={styles.celestia} src="/celestia.png" alt="" />
            </div>
            <div className={styles.pulseWrap}>
              <img className={styles.pulse} src="/pulse.png" alt="" />
            </div>
            <div className={styles.apexWrap}>
              <img className={styles.apex} src="/apex.png" alt="" />
            </div>
          </div>
        </div>
    
    </section>
  );
};

export default FrameComponent4;
