"use client";
import React from "react";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import {
  Viewport,
  Link,
  Root,
  List,
  Item,
  Indicator,
} from "@radix-ui/react-navigation-menu";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <Root className={styles.root}>
      <List className={styles.list}>
        <Item>
          <Link className={styles.link}> Bet </Link>
        </Item>
        <Item>
          <Link className={styles.link}> Live </Link>
        </Item>
        <Item>
          <Link className={styles.link}> Promo </Link>
        </Item>
        <Item>
          <Link className={styles.link}> Results </Link>
        </Item>
        <Item>
          <Link className={styles.link}> News </Link>
        </Item>
        <Indicator className={styles.link}>
          <div className="Arrow" />
        </Indicator>
        <Item>
          <Link className={styles.link}>
            <QuestionMarkCircledIcon />
          </Link>
        </Item>
      </List>
      <div className="ViewportPosition">
        <Viewport className="NavigationMenuViewport" />
      </div>
    </Root>
  );
};

export default Navbar;
