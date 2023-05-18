import React from "react";
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
import { ListItem } from "@/components/types/uiTypes";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <Root className={styles.root}>
      <List className={styles.navlist}>
        <Item>
          <Trigger className={styles.trigger}>
            Learn <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className={styles.content}>
            <ul className={`${styles.List} ${styles.one}`}>
              <li style={{ gridRow: "span 3" }}>
                <Link asChild>
                  <a className={styles.Callout} href="/">
                    <div className={styles.CalloutHeading}>Radix Primitives</div>
                    <p className={styles.CalloutText}>Unstyled, accessible components for React.</p>
                  </a>
                </Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </Content>
        </Item>
        <Item>
          <Trigger className={styles.trigger}>
            Overview <CaretDownIcon className={styles.CaretDown} aria-hidden />
          </Trigger>
          <Content className={styles.content}>
            <ul className={`${styles.List} ${styles.two}`}>
              <ListItem title="Introduction" href="/docs/primitives/overview/introduction">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/overview/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Animation" href="/docs/primitives/overview/animation">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Releases" href="/docs/primitives/overview/releases">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </Content>
        </Item>

        <Item>
          <Link className={styles.link} href="https://github.com/radix-ui">
            Github
          </Link>
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
      <Link asChild>
        <a
          className={classNames(`${styles.ListItemLink} ${styles.two}`)}
          {...props}
          ref={forwardedRef}
        >
          <div className={styles.ListItemHeading}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </a>
      </Link>
    </li>
  )
);

export default Sidebar;
