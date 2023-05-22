import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import styles from "./button.module.scss";

const button = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
    toggable: {
      true: styles.toggled,
      false: styles.nottoggled,
    },
  },
  compoundVariants: [
    { intent: "primary", size: "medium", className: styles.primaryMedium },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    toggable: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  toggable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  toggable,
  ...props
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (toggable) {
      setIsToggled(!isToggled);
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <button
      className={button({ intent, size, className, toggable: isToggled })}
      onClick={handleClick}
      {...props}
    />
  );
};
