import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface props {
  playerScore: number;
  houseScore: number;
}

const Header: FC<props> = ({ playerScore, houseScore }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ROCK PAPER SCISSORS</h1>
      <div className={styles.scores}>
        <div className={clsx(styles.scoreContainer, styles.player)}>
          <p className={styles.whoseScore}>You</p>
          <p className={styles.score}>{playerScore}</p>
        </div>
        <div className={clsx(styles.scoreContainer, styles.house)}>
          <p className={styles.whoseScore}>House</p>
          <p className={styles.score}>{houseScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
