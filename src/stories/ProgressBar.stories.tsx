import ProgressBar from "../components/ui/progress/progressbar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Regular: Story = {
  args: {
    value: 50,
    variant: "regular",
    size: "small",
  },
};
export const OddsBar: Story = {
  args: {
    value: 50,
    variant: "oddsBar",
    size: "small",
  },
};
