import React, { useEffect } from "react";
import styles from "./Introduce.module.css";
import classNames from "classnames/bind";
import AOS from "aos";
import "aos/dist/aos.css";

const cn = classNames.bind(styles);

const Introduce = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className={cn("content_flex", "intro_section")}>
      <div className={cn("introduce_container")}>
        <div className={cn("introduce_box")}>
          <div data-aos="fade-right">
            <div className={cn("thumb_wrapper")}>
              <div className={cn("title_area")}>
                <div data-aos="flip-left">
                  <h1>Introduce</h1>
                </div>
              </div>
              <img
                className={cn("image_thumnail")}
                src={`${process.env.PUBLIC_URL}/img/정호.jpg`}
                alt="정호 사진"
              />
            </div>
            <div className={cn("text_area")}>
              <div className={cn("desc")}>
                안녕하세요! 저는 하고 싶은 일이나 궁금한 것이 생기면 직접 부딪혀
                보고, 제 힘으로 알아내는 것을 좋아하는 프론트엔드 개발자
                이정호입니다. 고등학생 때부터 디자인 툴을 사용하며 디자인 관련
                일만 하던 중, 단순히 디자인에서 그치지 않고 이를 직접 구현하고
                싶다는 생각에 무작정 강의를 찾아보면서 어설프게 만들어본
                사이트가 브라우저에서 동작하는 것을 보며 크고 작은 성취감과
                희열감을 느꼈고, 이를 계기로 웹 개발에 빠져들게 되었습니다.
                현재는 생산성을 높이기 위한 컴포넌트와 디자인 시스템에 대한
                고민을 하며, 사용자 경험을 고려한 UI/UX 개발에 관심이 많습니다.
              </div>
            </div>

            <div className={cn("info")}>
              <div className={cn("email", "info_item")}>
                <a
                  href="mailto:oje12345671@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </div>

              <div className={cn("email", "info_item")}>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
              <div className={cn("email", "info_item")}>
                <a
                  href="https://velog.io/@leejungho9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </div>
              <div className={cn("email", "info_item")}>
                <a
                  href="https://adorable-viscount-bb5.notion.site/LEE-JUNG-HO-545433e4bce547bdaf89dd78b8d73220"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={cn("stack_box")}>
          <div data-aos="fade-left">
            <div className={cn("stack_wrapper")}>
              <div className={cn("title_area")}>
                <div data-aos="flip-left">
                  <h1>Stack</h1>
                </div>
              </div>
              <div className={cn("stack_area")}>
                <table className={cn("stack_table")}>
                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/react.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>REACT</td>
                    <td className={cn("table_cell")}>
                      JSX 문법과 컴포넌트 기반 아키텍처를 충분히 이해하고
                      활용하고 불필요한 렌더링을 최소화하기 컴포넌트를 작은
                      단위로 분할하여 작업할 수 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/javascript.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>JAVASCRIPT</td>
                    <td className={cn("table_cell")}>
                      Promise와 async/await를 이용하여 비동기 처리를 할 수
                      있습니다. 또한, DOM 구조를 파악하여 필요한 요소를 선택하고
                      조작하여 동적인 UI를 구현하거나, 이벤트 핸들링 등을 처리할
                      수 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/typescript.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>TYPESCRIPT</td>
                    <td className={cn("table_cell")}>
                      정적 타입 검사를 수행하고 인터페이스를 사용하여 코드
                      재사용성을 높이면 코드 안정성과 유지 보수성을 향상시킬 수
                      있습니다.
                    </td>
                  </tr>

                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/html.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>HTML5</td>
                    <td className={cn("table_cell")}>
                      웹 디자인 시안이 주어졌을 때 무리 없이 마크업 작업을
                      진행할 수 있습니다. 웹 표준 및 웹 접근성을 지키기 위해
                      노력합니다.
                    </td>
                  </tr>
                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/css.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>CSS3</td>
                    <td className={cn("table_cell")}>
                      styled-components을 활용한 CSS-in-JS 방식으로 스타일링
                      작업이 가능합니다. Media Query를 이용해 반응형 웹 개발이
                      가능합니다.
                    </td>
                  </tr>
                  <tr>
                    <td className={cn("table_cell")}>
                      <img
                        className={cn("tools_image")}
                        src={`${process.env.PUBLIC_URL}/img/git.svg`}
                        alt="react"
                      />
                    </td>
                    <td className={cn("table_cell")}>GIT</td>
                    <td className={cn("table_cell")}>
                      Git을 이용하여 버전 관리를 하고, 브랜치 기능을 활용하여
                      코드를 안정적으로 관리할 수 있어 효율적인 협업과 유지
                      보수가 가능합니다.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
