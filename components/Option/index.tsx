import { FC } from "react";
import styles from "./index.module.scss";

interface props {
  icon: string;
  bg: string;
  sh: string;
  action?: () => void;
}

const Option: FC<props> = ({ icon, bg, sh, action }) => {
  return (
    <button className={styles.container} style={{ backgroundColor: sh }} onClick={action}>
      <div className={styles.ripple}></div>
      <div className={styles.background} style={{ backgroundColor: bg }}></div>
      <div className={styles.iconsh}>
        <div className={styles.iconbg}></div>
        <img className={styles.icon} src={icon}></img>
      </div>
    </button>
  );
};

export default Option;
