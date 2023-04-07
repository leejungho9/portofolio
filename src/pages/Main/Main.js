import React from "react";
import styles from "./Main.module.css";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const Main = () => {
  return (
    <section className={cn("content", "main_section")}>
      <div className={cn("text_area", "stagger-wrapper")}>
        <div className={cn("title", "stagger-item")}>Portfolio</div>
        <h1>
          <div className={styles.name}>
            <div className={cn("stagger-item")}>
              LEE
              <div className={styles.line}></div>
            </div>
            <div className={cn("stagger-item")}>JUNG HO</div>
          </div>
        </h1>
        <p className={cn("stagger-item", "introduce")}>
          Hello, I'm FrontEnd Developer
        </p>
      </div>
      <div className={styles.circle_wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Main;
