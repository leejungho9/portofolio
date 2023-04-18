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
                  <h1 className={cn("title")}>photoday</h1>
                  <div className={cn("desc")}>
                    사진을 무료로 공유하고, 저작권 걱정 없이 다운로드 받을 수
                    있는 웹사이트
                  </div>
                  <div className={cn("skill")}>
                    React, Redux, TypeScript, HTML, CSS, AWS 사용
                  </div>
                  <div className={cn("link")}>
                    <a
                      href="https://adorable-viscount-bb5.notion.site/phtoday-ce9d3ccc01834d03bd37921f7f84a1dc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      photoday의 자세한 이야기
                    </a>
                  </div>

                  <div className={cn("date")}>
                    2023.03.03 ~ 2023.04.03 | 팀프로젝트
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
                  <div className={cn("subtitle")}>
                    RESPONSIVE WEBSITE [PC, MOB]
                  </div>
                  <h1 className={cn("title")}>DAMDA</h1>
                  <div className={cn("desc")}>
                    합리적인 가격으로 수제 꿀, 수제 청 등을 판매하는 건강식품
                    온라인 쇼핑몰
                  </div>
                  <div className={cn("skill")}>
                    React, Redux, HTML, CSS, firebase, AWS 사용
                  </div>
                  <div className={cn("link")}>
                    <a
                      href="https://adorable-viscount-bb5.notion.site/DAMDA-072ffd93323b420ea30ff2c45a894920"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DAMDA의 더 많은 이야기
                    </a>
                  </div>
                  <div className={cn("date")}>
                    2023-02-05~ 2023-04-30 | 팀프로젝트
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
                  <div className={cn("desc")}>
                    카드부터 아트프린트, 민화까지 다양한 아트상품을 판매하는
                    비핸즈 회사의 웹사이트
                  </div>
                  <div className={cn("skill")}>
                    {" "}
                    JavaScript, HTML, CSS 사용 ➝ React로 리팩토링 진행중
                  </div>
                  <div className={cn("link")}>
                    <a
                      href="https://adorable-viscount-bb5.notion.site/B-HANDS-39fa4760089a41ce954bc856b4ce7e41"
                      target="_blank"
                      rel="noreferrer"
                    >
                      B*HANDS의 더 많은 이야기
                    </a>
                  </div>
                  <div className={cn("date")}>
                    2022-06-10~ 2022-07-16 | 개인프로젝트
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
