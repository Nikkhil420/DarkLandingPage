import React from 'react'
import styles from './FAQ.module.css'
import QuestionComponent from './Questions/QuestionComponent'


const FAQ = () => {
  return (
   <section className={styles.MainContainer}>
    <div className={styles.container}>
        <div className={styles.fAQsForm}>
          <div className={styles.h2Wrapper}>
            <h1 className={styles.h21}>Frequently asked questions</h1>
          </div>
          <div className={styles.faqs}>
            <QuestionComponent />
            <div className={styles.formfaqParent}>
              <QuestionComponent  />
              <QuestionComponent  />
            </div>
            <QuestionComponent />
          </div>
        </div>
      </div>
   </section>
  )
}

export default FAQ