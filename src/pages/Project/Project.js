import React from "react";
import styles from "./Project.module.css";
import classNames from "classnames/bind";
import HorizontalScroll from "react-horizontal-scrolling";
const cn = classNames.bind(styles);

const Project = () => {
  return (
    <section className={cn("content", "project_section")}>
      <div className={cn("project_container")}>
        <div className={cn("title_area")}>
          <div data-aos="flip-left">
            <h1>Project</h1>
          </div>
        </div>

        <HorizontalScroll>
          <div className={cn("swiper_wrapper")}>
            <div className={cn("swiper")}>
              <div className={cn("item")}>
                <div className={cn("infos")}>
                  <div className={cn("subtitle")}>
                    RESPONSIVE WEBSITE [PC, MOB]
                  </div>
                  <h1 className={cn("title")}>Photoday</h1>
                  <div className={cn("desc")}>
                    직접찍은 사진을 공유하는 사이트
                  </div>
                  <div className={cn("skill")}>
                    React, Node.js, Redux, Axios, Vite 사용
                  </div>
                  <div className={cn("date")}>
                    2023-03-01~ 2023-04-03 | 팀프로젝트
                  </div>
                </div>
              </div>
              <img
                className={cn("image")}
                src={`${process.env.PUBLIC_URL}/img/photoday.png`}
                alt="프로젝트"
              />
            </div>
            <div className={cn("swiper")}>
              <div className={cn("item")}>
                <div className={cn("infos")}>
                  <div className={cn("subtitle")}>WEBSITE [PC]</div>
                  <h1 className={cn("title")}>DAMDA</h1>
                  <div className={cn("desc")}>
                    장인들이 만든 식품을 판매하는 이커머스
                  </div>
                  <div className={cn("skill")}>
                    React, Node.js, firebase 사용
                  </div>
                  <div className={cn("date")}>
                    2023-03-01~ 2023-04-03 | 팀프로젝트
                  </div>
                </div>
              </div>
              <img
                className={cn("image")}
                src={`${process.env.PUBLIC_URL}/img/damda.png`}
                alt="프로젝트"
              />
            </div>
            <div className={cn("swiper")}>
              <div className={cn("item")}>
                <div className={cn("infos")}>
                  <div className={cn("subtitle")}>
                    RESPONSIVE WEBSITE [PC, MOB]
                  </div>
                  <h1 className={cn("title")}>B*HANDS</h1>
                  <div className={cn("desc")}>비핸즈 굿즈 사이트</div>
                  <div className={cn("skill")}> javaScript, html, css 사용</div>
                  <div className={cn("date")}>
                    2023-03-01~ 2023-04-03 | 개인프로젝트
                  </div>
                </div>
              </div>
              <img
                className={cn("image")}
                src={`${process.env.PUBLIC_URL}/img/bhands.png`}
                alt="프로젝트"
              />
            </div>
          </div>
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default Project;
