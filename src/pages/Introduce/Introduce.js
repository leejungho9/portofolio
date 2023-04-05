import React from "react";
import styles from "./Introduce.module.css";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const Introduce = () => {
  return (
    <section className="content content_flex">
      <div className={cn("introduce_header")}>
        <div className={cn("thumb_wrapper")}>
          <div className={cn("thumbnail")}></div>
          <div className={cn("badge")}></div>
        </div>
        <div className={cn("text_area")}>
          <h2> LEE JUNG HO </h2>
          <div className={cn("desc")}>
            주로 리액트, 자바스크립트를 사용해서 개발합니다.
            <br />
            디자인과를 졸업하고 ~~~~ 관심이 생겨 ~~ 공부하게 됐습니다.
          </div>
        </div>
        <div>
          <div className={cn("email", "mouse_effect")}>
            <a href="mailto:oje12345671@gamil.com">oje12345671@gamil.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
