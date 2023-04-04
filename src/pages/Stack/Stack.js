import React from "react";
import styles from "./Stack.module.css";
import { GoSearch } from "react-icons/go";

const Stack = () => {
  return (
    <>
      <header className={styles.search}>
        <form>
          <input
            type="text"
            placeholder="Search"
            className={styles.search_field}
          ></input>
          <button className={styles.cancel_btn}>취소</button>
          <GoSearch className={styles.search_icon} />
        </form>
      </header>
      <div className={styles.text_area}>
        <h1>Stacks</h1>
        <div className={styles.desc}>사용가능한 기술</div>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </ul>
    </>
  );
};

export default Stack;
