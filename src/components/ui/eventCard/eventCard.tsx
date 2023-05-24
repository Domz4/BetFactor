import * as Separator from "@radix-ui/react-separator";
import { Button } from "../button/button";
import { days } from "@/components/types/uiTypes";
import styles from "./eventCard.module.scss";

const EventCard = () => {
  return (
    <a className={styles.eventContainer}>
      <div className={styles.eventHeader}>
        <img
          src="https://media-3.api-sports.io/football/leagues/39.png"
          className={styles.leagueIcon}
        />
        <span> Premier league</span>
        <Separator.Root className={styles.separator} />
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.eventSummary}>
          <div className={styles.timestamp}>
            <span className={styles.time}>18:30 </span>
            <span className={styles.date}>{days.FRIDAY}</span>
          </div>
          <span className={styles.teams}>Liverpool-Chealsea</span>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button toggable={true} intent="primary" size="small">
          <span className={styles.team}>Liverpool</span>
          <br />
          <span className={styles.odds}>1.86</span>
        </Button>
        <Button toggable={true} intent="primary" size="small">
          <span className={styles.team}>Draw</span>
          <br />
          <span className={styles.odds}>3.86</span>
        </Button>
        <Button toggable={true} intent="primary" size="small">
          <span className={styles.team}>Chealsea</span>
          <br />
          <span className={styles.odds}>2.36</span>
        </Button>
      </div>
    </a>
  );
};

export default EventCard;
