import { FC } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import NextLink from "next/link";

interface props {
  playerScore: number;
  houseScore: number;
  title: string;
  link: string;
}

const Header: FC<props> = ({ playerScore, houseScore, title, link }) => {
  return (
    <div className={styles.container}>
      <NextLink href={link}>
        <a className={clsx(styles.title, styles[title === "rock" ? "rock" : "spock"])}>
          {title === "rock" ? "ROCK PAPER SCISSORS" : "ROCK PAPER SCISSORS LIZARD SPOCK"}
        </a>
      </NextLink>

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
