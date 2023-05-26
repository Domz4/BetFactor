import { reactFC } from "@/components/types/uiTypes";
import { FC } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import styles from "./betCard.module.scss";

const BetCard: FC<reactFC> = ({ className }) => {
  return (
    <>
      <Root className={`${className} ${styles.card}`} defaultValue="tab1">
        <List className={styles.tabsList} aria-label="Manage your account">
          <Trigger className={styles.tabsTrigger} value="tab1">
            Account
          </Trigger>
          <Trigger className={styles.tabsTrigger} value="tab2">
            Password
          </Trigger>
        </List>
        <Content className={styles.tabsContent} value="tab1">
          <p className={styles.text}>
            Make changes to your account here. Click save when you're done.
          </p>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              className={styles.input}
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            <button className={styles.button}>Save changes</button>
          </div>
        </Content>
        <Content className={styles.tabsContent} value="tab2">
          <p className={styles.text}>
            Change your password here. After saving, you'll be logged out.
          </p>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="currentPassword">
              Current password
            </label>
            <input
              className={styles.input}
              id="currentPassword"
              type="password"
            />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="newPassword">
              New password
            </label>
            <input className={styles.input} id="newPassword" type="password" />
          </fieldset>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className={styles.input}
              id="confirmPassword"
              type="password"
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            <button className={styles.Button}>Change password</button>
          </div>
        </Content>
      </Root>
    </>
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
