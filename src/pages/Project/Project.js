import React from "react";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <>
      <div className={styles.featured}>
        <div className={styles.count}>8</div>
        <div className={styles.text_area}>
          <h1 className={styles.title}>
            Project <sup>1</sup>
          </h1>
          <p className={styles.desc}>지금까지 작업한 프로젝트</p>
        </div>
      </div>

      <ul className={styles.swiper}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ol className={styles.list}>
        <li className={styles.item}>
          <div className={styles.num}>1</div>
          <div className={styles.infos}>
            <div className={styles.title}>Photoday</div>
            <div className={styles.desc}>Lorem Ipsum is simply dummy</div>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.num}>2</div>
          <div className={styles.infos}>
            <div className={styles.title}>Damda</div>
            <div className={styles.desc}>Lorem Ipsum is simply dummy</div>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.num}>3</div>
          <div className={styles.infos}>
            <div className={styles.title}>MungDoList</div>
            <div className={styles.desc}>Lorem Ipsum is simply dummy</div>
          </div>
        </li>
      </ol>
    </>
  );
};

export default Project;
