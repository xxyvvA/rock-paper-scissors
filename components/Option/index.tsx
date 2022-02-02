import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface props {
  icon: string;
  bg: string;
  sh: string;
  action?: () => void;
  small?: boolean;
}

const Option: FC<props> = ({ icon, bg, sh, action, small }) => {
  return (
    <button
      className={clsx(styles.container, small && styles.small)}
      style={{ backgroundColor: sh }}
      onClick={action}
    >
      <div
        className={clsx(styles.background, small && styles.small)}
        style={{ backgroundColor: bg }}
      ></div>
      <div className={clsx(styles.iconsh, small && styles.small)}>
        <div className={clsx(styles.iconbg, small && styles.small)}></div>
        <img className={clsx(styles.icon, small && styles.small)} src={icon}></img>
      </div>
    </button>
  );
};

export default Option;
