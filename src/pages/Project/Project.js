import React from "react";
import styles from "./Project.module.css";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

const Project = () => {
  return (
    <section className="content">
      <div className={cn("featured")}>
        <div className={cn("count")}>1</div>
        <div className={cn("text_area")}>
          <h1 className={cn("title")}>Project</h1>
        </div>
      </div>

      <div className={cn("swiper")}>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/photoday.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>Photoday</div>
              <div className={cn("desc")}>직접찍은 사진을 공유하는 사이트</div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/damda.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>DAMDA</div>
              <div className={cn("desc")}>
                장인이 직접 만든 식품을 판매하는 이커머스 사이트
              </div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/bhands.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>B*HANDS</div>
              <div className={cn("desc")}>B*HANDS 사이트</div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/cokcookmain.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>cokcokcookcook</div>
              <div className={cn("desc")}>자신의 레시피를 공유하는 사이트</div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/photoday.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>Photoday</div>
              <div className={cn("desc")}>직접찍은 사진을 공유하는 사이트</div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
        <div className={cn("card_wrapper")}>
          <img
            className={cn("image")}
            src={`${process.env.PUBLIC_URL}/img/photoday.png`}
            alt="프로젝트"
          />
          <div className={cn("item")}>
            <div className={cn("infos")}>
              <div className={cn("title")}>Photoday</div>
              <div className={cn("desc")}>직접찍은 사진을 공유하는 사이트</div>
              <div className={cn("date")}>2023-03-01~ 2023-04-03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
