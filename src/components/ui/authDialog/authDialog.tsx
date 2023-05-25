import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
  Description,
} from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./authDialog.module.scss";

const AuthDialog = () => {
  return (
    <div className={styles.root}>
      <Root>
        <Trigger asChild>
          <button className={styles.button}>Edit profile</button>
        </Trigger>
        <Portal>
          <Overlay className={styles.overlay} />
          <Content className={styles.content}>
            <Title className={styles.title}>Edit profile</Title>
            <Description className={styles.description}>
              Make changes to your profile here. Click save when you're done.
            </Description>
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                id="name"
                placeholder="enter name"
              />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input
                className={styles.input}
                id="username"
                placeholder="enter username"
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Close asChild>
                <button className={styles.saveButton}>Save changes</button>
              </Close>
            </div>
            <Close asChild>
              <button className={styles.iconbutton} aria-label="Close">
                <Cross2Icon />
              </button>
            </Close>
          </Content>
        </Portal>
      </Root>
    </div>
  );
};

export default AuthDialog;
