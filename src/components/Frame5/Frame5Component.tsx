import React from 'react'
import styles from './Frame5Component.module.css'
import Cards from './InformationCards/Cards';

const Frame5Component = () => {
  return (
   
    <section className={styles.MainContainer}>
        <div className={styles.container1}>
             <div className={styles.headMainWrap}>
                <div className={styles.headMain}>
                <h2 className={styles.h2}>Everything you need</h2>
                <h3 className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
                </div>
                </div>
                <div className={styles.container2}>
                    <Cards 
                     title="Integration ecosystem"
                     info="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
                    
                    />
                     <Cards 
                     title="Goal setting and tracking"
                     info="Define and track your goals, breaking objectives into achievable tasks to keep your targets in sight."
                     
                    />
                     <Cards 
                     title="Secure data encryption"
                     info="With your end-to-end encryption,  data is securely stored and protected from unauthorized access."
                     
                   />

                </div>

            </div> 
        
    </section>


  )
}

export default Frame5Component;