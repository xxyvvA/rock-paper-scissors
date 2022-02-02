import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "../components/Head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Option from "../components/Option";
import Rules from "../components/Portal";
import themes from "../tailwind.config";
import clsx from "clsx";

const Home: NextPage = () => {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [houseScore, setHouseScore] = useState<number>(0);
  const [playerChosen, setPlayerChosen] = useState<
    "rock" | "paper" | "scissors" | "lizard" | "spock" | null
  >(null);
  const [houseChosen, setHouseChosen] = useState<
    "rock" | "paper" | "scissors" | "lizard" | "spock" | null
  >(null);
  const [display, setDisplay] = useState<"choose" | "house" | "outcome">("choose");
  const [result, setResult] = useState<"win" | "lose" | "tie" | null>(null);
  const [rules, setRules] = useState<boolean>(false);

  const houseOptions: ("rock" | "paper" | "scissors" | "lizard" | "spock")[] = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
  ];

  const paper = {
    icon: "img/paper.svg",
    bg: themes.theme.colors.paper,
    sh: themes.theme.colors.paperSh,
  };

  const scissors = {
    icon: "img/scissors.svg",
    bg: themes.theme.colors.scissors,
    sh: themes.theme.colors.scissorsSh,
  };

  const rock = {
    icon: "img/rock.svg",
    bg: themes.theme.colors.rock,
    sh: themes.theme.colors.rockSh,
  };

  const lizard = {
    icon: "img/lizard.svg",
    bg: themes.theme.colors.lizard,
    sh: themes.theme.colors.lizardSh,
  };

  const spock = {
    icon: "img/spock.svg",
    bg: themes.theme.colors.spock,
    sh: themes.theme.colors.spockSh,
  };

  useEffect(() => {
    if (playerChosen) {
      setDisplay("house");
      let rand = Math.floor(Math.random() * 5);
      setTimeout(() => {
        setDisplay("outcome");
        setHouseChosen(houseOptions[rand]);
      }, 1000);
    }
  }, [playerChosen]);

  useEffect(() => {
    switch (playerChosen) {
      case "rock":
        if (houseChosen === "paper" || houseChosen === "spock") {
          setHouseScore(houseScore + 1);
          setResult("lose");
        } else if (houseChosen === "scissors" || houseChosen === "lizard") {
          setPlayerScore(playerScore + 1);
          setResult("win");
        }
        break;
      case "paper":
        if (houseChosen === "scissors" || houseChosen === "lizard") {
          setHouseScore(houseScore + 1);
          setResult("lose");
        } else if (houseChosen === "rock" || houseChosen === "spock") {
          setPlayerScore(playerScore + 1);
          setResult("win");
        }
        break;
      case "scissors":
        if (houseChosen === "rock" || houseChosen === "spock") {
          setHouseScore(houseScore + 1);
          setResult("lose");
        } else if (houseChosen === "paper" || houseChosen === "lizard") {
          setPlayerScore(playerScore + 1);
          setResult("win");
        }
        break;
      case "lizard":
        if (houseChosen === "rock" || houseChosen === "scissors") {
          setHouseScore(houseScore + 1);
          setResult("lose");
        } else if (houseChosen === "paper" || houseChosen === "spock") {
          setPlayerScore(playerScore + 1);
          setResult("win");
        }
        break;
      case "spock":
        if (houseChosen === "lizard" || houseChosen === "paper") {
          setHouseScore(houseScore + 1);
          setResult("lose");
        } else if (houseChosen === "rock" || houseChosen === "scissors") {
          setPlayerScore(playerScore + 1);
          setResult("win");
        }
        break;
    }
  }, [playerChosen, houseChosen]);

  return (
    <>
      <Head />
      <Header playerScore={playerScore} houseScore={houseScore} title={"spock"} link={"/"} />
      {display === "choose" ? (
        <div className={styles.playArea}>
          <img className={styles.bgpentagon} src="/img/pentagon.svg" />
          <div className={styles.pentagonZero}>
            <Option {...scissors} small={true} action={() => setPlayerChosen("scissors")} />
          </div>
          <div className={styles.pentagonOne}>
            <Option {...spock} small={true} action={() => setPlayerChosen("spock")} />
            <Option {...paper} small={true} action={() => setPlayerChosen("paper")} />
          </div>
          <div className={styles.pentagonTwo}>
            <Option {...lizard} small={true} action={() => setPlayerChosen("lizard")} />
            <Option {...rock} small={true} action={() => setPlayerChosen("rock")} />
          </div>
        </div>
      ) : (
        <div className={styles.outcome}>
          <div className={styles.pick}>
            <Option
              {...(playerChosen === "rock"
                ? rock
                : playerChosen === "paper"
                ? paper
                : playerChosen === "scissors"
                ? scissors
                : playerChosen === "lizard"
                ? lizard
                : spock)}
            />
            <p className={styles.name}>YOU PICKED</p>
          </div>
          <div className={styles.pick}>
            {display === "house" ? (
              <div className={styles.housePick}></div>
            ) : (
              <Option
                {...(houseChosen === "rock"
                  ? rock
                  : houseChosen === "paper"
                  ? paper
                  : houseChosen === "scissors"
                  ? scissors
                  : houseChosen === "lizard"
                  ? lizard
                  : spock)}
              />
            )}
            <p className={styles.name}>THE HOUSE PICKED</p>
          </div>
        </div>
      )}

      {display === "outcome" ? (
        <div className={styles.result}>
          <p className={styles.words}>
            {result === "win" ? "YOU WIN" : result === "lose" ? "YOU LOSE" : null}
          </p>
          <button
            className={styles.reset}
            onClick={() => {
              setPlayerChosen(null);
              setHouseChosen(null);
              setDisplay("choose");
              setResult(null);
            }}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : null}

      <div className={rules ? styles.shadow : ""}></div>

      <Rules open={rules} setRules={setRules} rulesImg={"/img/rulesSpock.svg"} />

      <button
        className={styles.rulesButton}
        onClick={() => {
          setRules(true);
        }}
      >
        RULES
      </button>
    </>
  );
};

export default Home;
