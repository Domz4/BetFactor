import { Root, Indicator } from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import styles from "./progressbar.module.scss";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const progressBar = cva(styles.base, {
  variants: {
    variant: {
      oddsBar: styles.oddsBar,
      regular: styles.regular,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    variant: "oddsBar",
    size: "small",
  },
});
export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBar> {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  variant,
  size,
  ...props
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Root
      className={clsx(styles.root, progressBar({ size }))}
      value={progress}
      {...props}
    >
      <Indicator
        className={clsx(
          styles.indicator,
          styles.progress,
          progressBar({ variant })
        )}
      />
      <div
        className={clsx(styles.shrinker, styles.indicator)}
        style={{ width: `${100 - progress}%` }}
      />
    </Root>
  );
};

export default ProgressBar;
