import React from 'react';
import styles from './Webkit.module.css';




const Webkit = () => {
  return (
  
    <div className={styles.bar}>
      <div className={styles.thisPageIsIncludedInAFreParent}>
        <div className={styles.thisPageIs}>
          This page is included in a free SaaS Website Kit.
        </div>
        <div className={styles.heroContent}>
          <div className={styles.viewTheComplete}>View the complete Kit</div>
          <img className={styles.icons} alt="" src="/vector.png" />
        </div>
      </div>
    </div>
   
  )
}

export default Webkit;