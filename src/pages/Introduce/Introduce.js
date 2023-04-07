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
                이정호입니다. 단순히 웹 디자인에서 그치지 않고 이를 직접 코드를
                작성하고 결과물이 실제 브라우저에서 동작하는 것을 보며 크고 작은
                성취감과 희열감을 느끼며 웹 개발에 더욱 빠져들게 되었습니다.
                아직은 많이 부족하지만, 변화하는 세상에 맞춰 자기 개발을 미루지
                않고, 기본기 탄탄한 웹 프론트엔드 개발자가 되기 위해
                노력하겠습니다.
              </div>
            </div>

            <div className={cn("info")}>
              <div className={cn("email", "info_item", "mouse_effect")}>
                <a href="mailto:oje12345671@gamil.com">Email</a>
              </div>

              <div className={cn("email", "info_item", "mouse_effect")}>
                <a href="mailto:oje12345671@gamil.com">Github</a>
              </div>
              <div className={cn("email", "info_item", "mouse_effect")}>
                <a href="mailto:oje12345671@gamil.com">Blog</a>
              </div>
              <div className={cn("email", "info_item", "mouse_effect")}>
                <a href="mailto:oje12345671@gamil.com">Resume</a>
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
                      필요한 컴포넌트를 구현할 수 있고 Hooks를 통해 상태 값을
                      생성하고 관리할 수 있습니다. Styled Components
                      라이브러리를 통해 컴포넌트들을 스타일링 할 수 있습니다.
                      Redux를 활용한 효율적인 상태 관리를 추구합니다.
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
                      ES2015 이전과 이후 모두 자바스크립트 문법을 알고 DOM을
                      조작하는 것에 어려움이 없습니다.
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
                      TypeScript를 React의 State나 변수, 함수 등을 컴파일 타임에
                      체크하여 협업의 효율과 코드 개발의 생산성을 높일 수
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
                      Emotion을 활용한 CSS-in-JS 방식으로 스타일링 작업이
                      가능합니다. Media Query를 이용해 반응형 웹 개발이
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
                      Git을 통해 로컬 및 리모트 저장소를 나누어 작업할 수
                      있습니다. 브랜치를 main 브랜치와 develop 브랜치로 나누어
                      효율적인 방식으로 코드 및 커밋을 관리합니다.
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
