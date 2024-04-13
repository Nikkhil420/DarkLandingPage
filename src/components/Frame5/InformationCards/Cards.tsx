import React, { FunctionComponent, useMemo } from 'react'
import styles from './Cards.module.css'


const Cards:FunctionComponent<any>= ({title, info, propWidth}) => {



    return (
    <div className={styles.cards}>
        <div className={styles.icons}>
            <img src="/infoIcon.png" alt="" className={styles.iconImg} />
        </div>
        <div className={styles.body}>
            <b className={styles.title}>
                {title}
            </b>
            <div className={styles.info}>{info}</div>
        </div>

    </div>
  )
}

export default Cards;