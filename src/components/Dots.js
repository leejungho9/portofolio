import styles from "./Dots.module.css";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Dot = ({ num, scrollIndex }) => {
  let back_active = scrollIndex === num;
  return <div className={cn("dot", { active: back_active })}></div>;
};

const Dots = ({ scrollIndex }) => {
  return (
    <div className={cn("dotsContainer")}>
      <div className={cn("dotsWrapper")}>
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;
