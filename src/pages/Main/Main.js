import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <>
      {/* 텍스트 영역 */}
      <div className={styles.text_area}>
        <div className={styles.title}>Portfolio</div>
        <h1>
          <div className={styles.name}>
            LEE
            <div className={styles.line}></div>
            <br />
            JUNG HO
          </div>
        </h1>
        <p className={styles.introduce}>Hello, I'm Junior FrontEnd Developer</p>
      </div>
      {/* 원 영역 */}
      <div className={styles.circle_wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      {/* 뱃지 영역 */}
      <div className={styles.badge}>Home</div>
    </>
  );
};

export default Main;
