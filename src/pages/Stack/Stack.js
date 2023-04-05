import React from "react";
import styles from "./Stack.module.css";
import { GoSearch } from "react-icons/go";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const Stack = () => {
  return (
    <section className="content">
      <div className={cn("featured")}>
        <div className={cn("count")}>2</div>
        <div className={cn("text_area")}>
          <h1>Stacks</h1>
          <div className={cn("desc")}>사용가능한 기술</div>
        </div>
      </div>

      <ul className={cn("list")}>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
        <li className={cn("item")}></li>
      </ul>
    </section>
  );
};

export default Stack;
