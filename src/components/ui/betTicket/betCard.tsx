import { reactFC } from "@/components/types/uiTypes";
import { FC } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import styles from "./betCard.module.scss";
import { Button } from "../button/button";

const BetCard: FC<reactFC> = ({ className }) => {
  return (
    <Root className={className}>
      <div className={styles.ticketType}>
        <h2 className={styles.cardHeader}>Ticket</h2>
        <List>
          <Trigger className={styles.ticketTrigger} value="Simple">
            Simple
          </Trigger>
          <Trigger className={styles.ticketTrigger} value="Advanced">
            Advanced
          </Trigger>
        </List>
      </div>
      <Content value="Simple">
        <Root className={` ${styles.card}`} defaultValue="tab1">
          <div className={styles.cardSlip}></div>
          <List className={styles.tabsList} aria-label="Manage your tickets">
            <Trigger className={styles.tabsTrigger} value="tab1">
              1
            </Trigger>
            <Trigger className={styles.tabsTrigger} value="tab2">
              2
            </Trigger>
            <Trigger className={styles.tabsTrigger} value="tab3">
              3
            </Trigger>
            <Trigger className={styles.tabsTrigger} value="tab4">
              4
            </Trigger>
            <Trigger className={styles.tabsTrigger} value="tab5">
              5
            </Trigger>
          </List>
          <div className={styles.activeTab}></div>
          <Content className={styles.tabsContent} value="tab1">
            <p className={styles.text}>
              Ticket is empty! Please make your predictions
            </p>
          </Content>
          <Content className={styles.tabsContent} value="tab2">
            <p className={styles.text}></p>
          </Content>
          <div className={styles.details}>
            <div className={styles.moneyDetails}>
              <fieldset className={styles.fieldset}>
                <label className={styles.label} htmlFor="amount">
                  Amount
                </label>
                <input
                  type="number"
                  className={styles.input}
                  id="amount"
                  placeholder="$100"
                />
              </fieldset>
              <span className={styles.winning}>Potential winning:</span>
              <span className={styles.tax}>Tax:</span>
            </div>
            <Button className={styles.button} intent="primary">
              Place Bet
            </Button>
          </div>
        </Root>
      </Content>
    </Root>
  );
};
export default BetCard;

{
  /* <div className={`${className} ${styles.card}`}> */
}
{
  /*   <div className={styles.cardHeader}> */
}
{
  /*     <h2 className={styles.headerText}>Ticket</h2> */
}
{
  /*   </div> */
}
{
  /*   <div className={styles.cardSlip}> */
}

{
  /*   </div> */
}
{
  /*   <div className={styles.details}> */
}
{
  /*     <div className={styles.betDetails}></div> */
}
{
  /*     <div className={styles.infoDetails}></div> */
}
{
  /*   </div> */
}
{
  /*   <Button className={styles.betbtn} intent="primary"></Button> */
}
{
  /* </div> */
}
