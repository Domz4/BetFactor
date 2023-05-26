import React, { FC } from "react";
import classNames from "classnames";
import {
  Indicator,
  Root,
  List,
  Link,
  Item,
  Trigger,
  Content,
  Viewport,
} from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { ListItem, reactFC } from "@/components/types/uiTypes";
import styles from "./sidebar.module.scss";

const Sidebar: FC<reactFC> = ({ className }) => {
  const mockCategories = () => (
    <>
      <ListItem href="/" title="🇵Poland" />
      <ListItem href="/" title="🇪Spain" />
      <ListItem href="/" title="🏴󠁧󠁢󠁥󠁮󠁧󠁿England" />
    </>
  );
  return (
    <Root className={`${styles.root} ${className}`} orientation="vertical">
      <List className={styles.navlist}>
        <h2 className={styles.title}>Categories</h2>
        <Item className={styles.liItem}>
          <Trigger className={styles.trigger}>
            Football <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className={styles.content}>
            <ul className={`${styles.List} ${styles.one}`}>{mockCategories()}</ul>
          </Content>
        </Item>
        <Item className={styles.liItem}>
          <Trigger className={styles.trigger}>
            Tenis <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className={styles.content}>
            <ul className={`${styles.List} ${styles.two}`}>{mockCategories()}</ul>
          </Content>
        </Item>

        <Item className={styles.liItem}>
          <Trigger className={styles.trigger}>
            Martial Arts <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
        </Item>

        <Item className={styles.liItem}>
          <Trigger className={styles.trigger}>
            Esports <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
        </Item>

        <Item className={styles.liItem}>
          <Trigger className={styles.trigger}>
            Volleyball <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
        </Item>

        <Item>
          <Trigger className={styles.trigger}>
            Basketball <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
        </Item>

        <Indicator className={styles.indicator}>
          <div className={styles.arrow} />
        </Indicator>
      </List>

      <div className={styles.ViewportPosition}>
        <Viewport className={styles.viewport} />
      </div>
    </Root>
  );
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItem>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <Link asChild className={className}>
        <a
          className={classNames(`${styles.ListItemLink} ${styles.two}`)}
          {...props}
          ref={forwardedRef}
        >
          <div className={styles.ListItemHeading}>{title}</div>
        </a>
      </Link>
    </li>
  )
);

export default Sidebar;
