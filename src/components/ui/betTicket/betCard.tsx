import { Button } from "../button/button";
import { reactFC } from "@/components/types/uiTypes";
import { FC } from "react";
import styles from "./betCard.module.scss";

const BetCard: FC<reactFC> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.cardHeader}></div>
      <div className={styles.cardSlip}></div>
      <div className={styles.details}>
        <div className="betDetails"></div>
        <div className="infoDetails"></div>
      </div>
      <Button className={styles.betbtn} intent="primary"></Button>
    </div>
  );
};

export default BetCard;
