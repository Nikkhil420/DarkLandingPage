import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from './Questions.module.css'

export type FormFAQType = {
  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const QuestionComponent = ({  }) => {
 

  return (
    <div className={styles.formfaq} >
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.frame}>
        <img
          className={styles.vectorIcon}
          src="/plusSign.png"
        />
      </div>
    </div>
  );
};

export default QuestionComponent;
