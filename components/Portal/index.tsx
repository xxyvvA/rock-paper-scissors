import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.scss";

interface ModalProps {
  open: boolean;
  setRules: Dispatch<SetStateAction<boolean>>;
}

const Rules: FC<ModalProps> = ({ open, setRules }) => {
  let ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.body;
    setMounted(true);
  });

  return mounted && open
    ? createPortal(
        <div className={styles.container}>
          <p className={styles.rulesHeader}>RULES</p>
          <img className={styles.graphic} src="/img/rules.svg" />
          <button onClick={() => setRules(false)}>
            <svg className={styles.close} width="19.09" height="19.09">
              <path stroke="#979797" strokeWidth="3" d="M2.12,2.12 L16.97,16.97" />
              <path stroke="#979797" strokeWidth="3" d="M2.12,16.97 L16.97,2.12" />
            </svg>
          </button>
        </div>,
        ref.current as HTMLElement
      )
    : null;
};

export default Rules;
